import { socket } from "../serverSocket";

const defaultState = {
    currentPage: (process.env.NODE_ENV !== 'development') ? 0 : 0
}

export const recordingReducerV2 = (state = defaultState, action) => {
    switch (action.type) {
        case 'MOVE_PAGE':
            state = {
                ...state,
                currentPage: action.payload
            }
            return state

        case 'DEVICE_META':

            let { deviceNumber, hardwareRecordingNumber } = action.payload

            state = {
                ...state,
                deviceNumber: deviceNumber,
                hardwareRecordingNumber: hardwareRecordingNumber
            }

            return state

        case 'ADD_SIMPLE_SYMPTOM':
            let { symptom } = action.payload

            console.log(symptom)

            state = {
                ...state,
                symptomArray: state.symptomArray ? [...state.symptomArray, action.payload] : [action.payload]
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
            state = {
                ...state, 
                symptomArray: state.symptomArray ? [...state.symptomArray, action.payload] : [{symptom:state.complexSymptomState, ...action.payload}]
            }

            return state

        default:
            return state
    }
}