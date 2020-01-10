const mongoose = require('mongoose')

const Recording = new mongoose.Schema({
    recordingId: String,
    startTime: Date,
    endTime: Date,
    hardwareRecordingNumber:Number,
})

const Symptom = new mongoose.Schema({
    symptom: String, 
    severity: Number,
    location: String,
    timestamp: {type: Date, default: new Date()}, 
    notes: String, 
    recordingId:String,
})

const Rating = new mongoose.Schema({
    overall:Number,
    abdPain:Number,
    bloating:Number,
    wind:Number,
    notes:String,
    timestamp: {type:Date, default: new Date()},
    recordingId:String,
})

const Food = new mongoose.Schema({
    foodName: String,
    components: String,
    timestamp: { type: Date, default: new Date()},
})

const Context = new mongoose.Schema({
    poop: Number,
    poopSize: Number,
    stress: Number,
    sleep: Number,
    energy: Number, 
    notes: String,
    timestamp: { type: Date, default: new Date()},
    recordingId:String,
})

module.exports = {
    Recording: mongoose.model('Recording', Recording),
    Symptom: mongoose.model('Symptom', Symptom),
    Food: mongoose.model('Food', Food),
    Context: mongoose.model('Context', Context),
    Rating: mongoose.model('Rating', Rating)
}