require('dotenv').config()
const express = require('express')
const socket = require('socket.io')
const http = require('http')
const cors = require('cors')
const shortid = require('shortid')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const MONGO_URL = process.env.MONGO_URI
mongoose.connect(MONGO_URL, {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected to db'))
const Schemas = require('./schemas/schemas')

const app = express()
const server = http.createServer(app)
const io = socket(server)

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static(path.join(__dirname, 'client_v2/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

io.on('connection', socket => {

    let recording

    io.emit('master/meta/connect', `socket ${socket.id} connected`)
    io.to(`${socket.id}`).emit('res@client/meta/connect')
    
    socket.on('client/recording/state', async data => {

        console.log('recording pressed...')
        console.log(data)

        if((data.recordingId == null) && data.isRecording){

            console.log('recording change...')

            let newId = shortid.generate()

            recording = {
                recordingId:newId,
                startTime:new Date(),
                hardwareRecordingNumber:data.hardwareRecordingNumber,
                timestamp: new Date()
            }

            const newRecording = await Schemas.Recording.create({...recording})

            io.to(`${socket.id}`).emit('res@client/recording/state', {recordingId:newId, ...newRecording})
        }
        
    })

    socket.on('client/submit/symptom', async data => {

        console.log(data)

        const newSymptom = new Schemas.Symptom({
            ...data,
            timestamp: new Date()
        })

        console.log(newSymptom)

        const saveRecording = await newSymptom.save()
        io.to(`${socket.id}`).emit('res@client/submit/symptom', saveRecording)
        io.emit('master/submit/symptom', saveRecording)

    })

    socket.on('client/submit/rating', async data => {
        let { recordingId } = data
        recording = {...recording, endTime:new Date()}
        let rating = {...data}

        const newRating = await Schemas.Rating({...rating}).save()
        const updatedEnding = await Schemas.Recording.findOneAndUpdate({recordingId:recordingId}, {...recording})

        console.log(socket.id, recording, rating)
        makeNewRecording = true

        io.to(`${socket.id}`).emit('res@client/submit/rating', {rating: newRating, updatedRecording: updatedEnding})
        io.emit('master/submit/rating', {rating: newRating, updatedRecording: updatedEnding})
    })

    socket.on('client/submit/food', async food => {
        let foodData = {...food, timestamp: food.timestamp}
        const newFood = await Schemas.Food.create({...foodData})

        io.to(`${socket.id}`).emit('res@client/submit/food', newFood)
        io.emit('master/submit/food', newFood)
    })

    socket.on('client/submit/context', async context => {
        let contextData = {...context, timestamp: new Date()}
        const newContext = await Schemas.Context.create({...contextData})

        io.to(`${socket.id}`).emit('res@client/submit/context', newContext)
        io.emit('master/submit/context', newContext)
    })

    socket.on('client/login/submit', async login => {
        let userQuery = await Schemas.User.findOne({username:login.username})

        if(userQuery.username === login.username){
            let { password } = login
            let isMatch = await bcrypt.compare(password, userQuery.password)
            const token = isMatch && await jwt.sign({...userQuery}, 'st18chenh')
            socket.emit('server/login/response', {loggedIn:isMatch, jwt:token})
        } else {
            socket.emit('server/login/response', {loggedIn:false, jwt:null})
        }
        
    })

    socket.on('disconnect', () => {
        io.emit('master/meta/disconnect', `socket ${socket.id} disconnected`)
    })

})

app.get('/', (req,res) => {
    res.json('realtime NGP Backend')
})

app.get('/api', async(req,res) => {

    const query = req.body
    console.log(query)

    let recordings = await Schemas.Recording.find(query)
    let symptoms = await Schemas.Symptom.find(query)
    let overalls = await Schemas.Rating.find(query)
    let foods = await Schemas.Food.find(query)
    let contexts = await Schemas.Context.find(query)

    res.json({
        recordings: [...recordings],
        symptoms: [...symptoms],
        overalls: [...overalls],
        foods: [...foods],
        contexts: [...contexts]
    })

})

app.post('/api/login', async(req,res) => {

    let userQuery = await Schemas.User.find({username:req.body.username})
    console.log(userQuery)

    if(userQuery.length >= 1) {
        res.json({error:'user already exists'})
        return 
    }

    try{

        let newObject = {
            ...req.body, 
            password: await bcrypt.hash(req.body.password, 10)
        }

        let newUser = await Schemas.User.create(newObject)
        res.json(newUser)

        return

    } catch(err) {
        res.json(err)

        return
    }
    
})

app.delete('/api/ATOMIC_DELETE', async(req,res) => {
    console.log('hmmm... this is very dangerous...')
    let deleteReturns_rec, deleteReturns_symp, deleteReturns_rate = null
    console.log(req.body)
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns_rec = await Schemas.Recording.find(req.body.query).deleteMany()
        deleteReturns_symp = await Schemas.Symptom.find(req.body.query).deleteMany()
        deleteReturns_rate = await Schemas.Rating.find(req.body.query).deleteMany()
    }

    res.json({rec:deleteReturns_rec, symp:deleteReturns_symp, rate:deleteReturns_rate} || 'nothing...')
})

app.delete('/api/foods', async(req,res) => {
    let deleteReturns = null
    console.log(req.body)
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Food.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.delete('/api/contexts', async(req,res) => {
    let deleteReturns = null
    console.log(req.body)
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Context.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.put('/api/ATOMIC_EDIT', async(req,res) => {

    let {query, categories, delta, password} = req.body

    console.log('hmmm.... are you sure this is alright?')
    let editReturns_rec, editReturns_symp, editReturns_rate = null
    console.log(req.body)
    if(password == process.env.MASTER_KEY){
        editReturns_rec = await Schemas.Recording.find(req.body.query).updateMany({$set: {...delta}})
        editReturns_symp = await Schemas.Symptom.find(req.body.query).updateMany({$set: {...delta}})
        editReturns_rate = await Schemas.Rating.find(req.body.query).updateMany({$set: {...delta}})
    }

    res.json({rec:editReturns_rec, symp:editReturns_symp, rate:editReturns_rate} || null)
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.get('/client2*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client_v2/build/index.html'))
})

server.listen(PORT, () => console.log(`listening on PORT:${PORT}`))