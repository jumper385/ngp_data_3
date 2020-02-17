import { socket } from "../serverSocket";

const defaultState = {
    currentPage: (process.env.NODE_ENV !== 'development') ? 0 : 0
}

export const recordingReducerV2 = (state = defaultState, action) => {
    switch (action.type) {

        case 'RESET_RECORDING':
            state = defaultState
            return state

        case 'MOVE_PAGE':
            state = {
                ...state,
                currentPage: action.payload
            }
            return state

        case 'DEVICE_META':

            state = {
                ...state,
                ...action.payload
            }

            return state

        case 'ADD_SIMPLE_SYMPTOM':

            let newSimpleSymptom = {
                recordingId: state.recordingId,
                ...action.payload
            }

            socket.emit('/clientv2/recording/newSymptom', newSimpleSymptom)

            state = {
                ...state,
                symptomArray: state.symptomArray ? [...state.symptomArray, newSimpleSymptom] : [newSimpleSymptom]
            }

            return state

        case 'START_RECORDING':
            state = {
                ...state,
                isRecording: true
            }
            return state

        case 'STOP_RECORDING':

            state = {
                ...state,
                isRecording: false
            }
            
            socket.emit('/clientv2/recording/stop', state.recordingId)

            return state
        
        case "ENTERING_COMPLEX_SYMPTOM":
            
            state = {
                ...state, 
                complexSymptomState: state.complexSymptomState ? null : action.payload 
            }

            return state

        case 'REMOVE_COMPLEX_STATE':

            state = {
                ...state, 
                complexSymptomState: null
            }

            return state

        case 'ADD_COMPLEX_SYMPTOM':

            let newComplexSymptom = {
                symptom:state.complexSymptomState, 
                ...action.payload,
                recordingId: state.recordingId
            }

            socket.emit('/clientv2/recording/newSymptom', newComplexSymptom)

            state = {
                ...state, 
                symptomArray: state.symptomArray ? [...state.symptomArray, newComplexSymptom] : [newComplexSymptom]
            }

            return state

        case 'SUBMIT_RATINGS':

            let newOverall = {
                recordingId: state.recordingId,
                ...action.payload,
            }

            socket.emit('/clientv2/recording/newOverall', newOverall)

            state = {
                ...state,
                overalls: newOverall,
            }

            return state

        default:
            return state
    }
}