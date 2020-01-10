const mongoose = require('mongoose')

const GlobalParameters = {
    username: String,
    notes: String,
}

const GlobalRecordingParameters = {
    hardwareRecordingNumber: Number,
    recordingId: String,
}

const Recording = new mongoose.Schema({
    ...GlobalParameters,
    ...GlobalRecordingParameters,
    startTime: Date,
    endTime: Date,
    hardwareRecordingNumber:Number,
})

const Symptom = new mongoose.Schema({
    ...GlobalParameters,
    ...GlobalRecordingParameters,
    symptom: String, 
    severity: Number,
    location: String,
    timestamp: {type: Date, default: new Date()},
})

const Rating = new mongoose.Schema({
    ...GlobalParameters,
    ...GlobalRecordingParameters,
    overall:Number,
    abdPain:Number,
    bloating:Number,
    wind:Number,
    timestamp: {type:Date, default: new Date()},
})

const Food = new mongoose.Schema({
    ...GlobalParameters,
    foodName: String,
    components: String,
    timestamp: { type: Date, default: new Date()},
})

const Context = new mongoose.Schema({
    ...GlobalParameters,
    poop: Number,
    poopSize: Number,
    stress: Number,
    sleep: Number,
    energy: Number,
    timestamp: { type: Date, default: new Date()},
})

module.exports = {
    Recording: mongoose.model('Recording', Recording),
    Symptom: mongoose.model('Symptom', Symptom),
    Food: mongoose.model('Food', Food),
    Context: mongoose.model('Context', Context),
    Rating: mongoose.model('Rating', Rating)
}