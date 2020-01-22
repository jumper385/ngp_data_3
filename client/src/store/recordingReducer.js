import { socket } from "../serverSocket"

const defaultState = {}

export const currentRecording = (state = defaultState, action) => {
    switch(action.type){
        case 'RESET':
            state = defaultState
            return state

        case 'ADD_HARDWARE_RECORDING_NUMBER':

            state = {
                ...state, 
                hardwareRecordingNumber:action.payload.hardwareRecordingNumber,
                isReadyToRecord:true
            }
            return state

        case 'CHANGE_RECORDING_STATE':
            let recordingState = state.isRecording ? false : true

            state = {
                ...state, isRecording:recordingState,
                recordingClickCounter: state.recordingClickCounter+1 || 1,
            }

            socket.emit('client/recording/state', {isRecording: state.isRecording, hardwareRecordingNumber:state.hardwareRecordingNumber, recordingId:state.recordingId || null})

            return state

        case 'ADD_SHORTCUT_SYMPTOM':

            let uploadPayload = {
                ...action.payload, 
                timestamp:new Date(), 
                recordingId: state.recordingId || null,
                hardwareRecordingNumber:state.hardwareRecordingNumber
            }

            state = {...state, 
                symptomArray: state.symptomArray ?
                [...state.symptomArray, {...uploadPayload}] :
                [{...uploadPayload}],
                isComplex:false
            }

            socket.emit('client/submit/symptom', uploadPayload)
            return state

        case 'EDIT_SYMPTOM':

            let newSymptom = {
                ...state.currSymptom || null,
                ...action.payload,
                recordingId: state.recordingId || null,
                hardwareRecordingNumber:state.hardwareRecordingNumber,
                timestamp:new Date()
            }

            state = { 
                ...state, 
                currSymptom:newSymptom,
                isComplex: state.isComplex ? false : true
            }
            return state
            
        case 'ADD_SYMPTOM':

            let symptomUpload = {
                ...state.currSymptom, 
                ...action.payload, 
                recordingId: state.recordingId || null,
                hardwareRecordingNumber:state.hardwareRecordingNumber,
                timestamp:new Date()
            }

            state = {...state,
                symptomArray: state.symptomArray ?
                [...state.symptomArray, symptomUpload || null] :
                [symptomUpload || null],
                isComplex:false
            }

            socket.emit('client/submit/symptom', {
                ...state.currSymptom, 
                ...action.payload, 
                hardwareRecordingNumber:state.hardwareRecordingNumber,
                recordingId:state.recordingId || null,
                timestamp: new Date()
            })

            state.currSymptom = {}

            return state
        
        case 'ADD_RATING':

            state = {
                ...state, 
                rating: action.payload,
                isReadyToRecord:false,
                isRecording:false,
                recordingClickCounter:0
            }

            socket.emit('client/submit/rating', {
                ...action.payload,
                hardwareRecordingNumber:state.hardwareRecordingNumber, 
                recordingId:state.recordingId || null
            })

            return state

        case 'ADD_RECORDING_ID':
            
            state = {
                ...state, 
                recordingId:action.payload
            }

            return state

        default:
            return state
    }
}