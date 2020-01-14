require('dotenv').config()
const express = require('express')
const socket = require('socket.io')
const http = require('http')
const cors = require('cors')
const shortid = require('shortid')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

io.on('connection', socket => {

    let recordingId
    let recording
    let makeNewRecording = true

    console.log(socket.id, 'new user connected')

    setInterval(() => socket.emit('time', new Date()), 100)

    socket.on('client/recording/state', async data => {
        if(makeNewRecording){
            isRecording = data
            recordingId = shortid.generate()

            recording = {
                recordingId:recordingId,
                startTime:new Date(),
                hardwareRecordingNumber:data.hardwareRecordingNumber
            }
            
            const newRecording = new Schemas.Recording({...recording, startTime:new Date()})

            const saveRecording = await newRecording.save()
            console.log(saveRecording)
        }
        makeNewRecording = false
    })

    socket.on('client/submit/symptom', async data => {
        const symptomTimestamped = {...data, timestamp: new Date(), recordingId:recordingId}

        const newSymptom = new Schemas.Symptom({
            ...symptomTimestamped
        })

        const saveRecording = await newSymptom.save()

    })

    socket.on('client/submit/rating', async data => {
        recording = {...recording, endTime:new Date()}
        let rating = {...data, recordingId:recordingId}

        const newRating = await Schemas.Rating({...rating, recordingId:recordingId, timestamp: new Date()}).save()
        const updatedEnding = await Schemas.Recording.findOneAndUpdate({recordingId:recordingId}, {...recording})

        recordingId = 
        console.log(socket.id, recording, rating)
        makeNewRecording = true
    })

    socket.on('client/submit/food', async food => {
        let foodData = {...food, timestamp: food.timestamp}
        console.log(foodData, food)
        const newFood = await Schemas.Food.create({...foodData})
    })

    socket.on('client/submit/context', async context => {
        let contextData = {...context, timestamp: new Date()}
        const newContext = await Schemas.Context.create({...contextData})
        console.log(newContext)
    })

    socket.on('disconnect', () => {
        console.log(socket.id, 'user disconnected')
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

app.delete('/api/recordings', async(req,res) => {
    let deleteReturns = null
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Recording.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.delete('/api/symptoms', async(req,res) => {
    let deleteReturns = null
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Symptom.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.delete('/api/overalls', async(req,res) => {
    let deleteReturns = null
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Rating.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.delete('/api/foods', async(req,res) => {
    let deleteReturns = null
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Food.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.delete('/api/contexts', async(req,res) => {
    let deleteReturns = null
    if(req.body.password == process.env.MASTER_KEY){
        deleteReturns = await Schemas.Context.find(req.body.query).deleteMany()
    }
    res.json(deleteReturns || 'nothing...')
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

server.listen(PORT, () => console.log(`listening on PORT:${PORT}`))