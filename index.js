const express = require('express')
const socket = require('socket.io')
const http = require('http')
const cors = require('cors')
const shortid = require('shortid')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const MONGO_URL = 'mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/ngp_3?retryWrites=true&w=majority'
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
                startTime:data.timestamp
            }
            
            const newRecording = new Schemas.Recording({...recording})

            const saveRecording = await newRecording.save()
            console.log(saveRecording)
        }
        makeNewRecording = false
    })

    socket.on('client/submit/symptom', async data => {
        const symptomTimestamped = {...data, recordingId:recordingId}

        const newSymptom = new Schemas.Symptom({
            ...symptomTimestamped
        })

        const saveRecording = await newSymptom.save()

    })

    socket.on('client/submit/rating', async data => {
        recording = {...recording, endTime:data.timestamp}
        let rating = {...data, recordingId:recordingId}

        const newRating = await Schemas.Rating({...rating, recordingId:recordingId}).save()
        const updatedEnding = await Schemas.Recording.findOneAndUpdate({recordingId:recordingId}, {...recording})

        recordingId = 
        console.log(socket.id, recording, rating)
        makeNewRecording = true
    })

    socket.on('client/submit/food', async ratings => {
        let foodData = {...ratings}
        const newFood = await Schemas.Food.create({...foodData})
        console.log(newFood)
    })

    socket.on('client/submit/context', async context => {
        let contextData = {...context}
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

    res.json({
        recordings: [...recordings],
        symptoms: [...symptoms],
        overalls: [...overalls]
    })

})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

server.listen(PORT, () => console.log(`listening on PORT:${PORT}`))