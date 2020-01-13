import { createStore, combineReducers} from 'redux'

const defaultState = {}

const defaultReducer = (state = defaultState, action) => {
    switch(action.type){
        default: 
            return state
    }
}

const currentRecording = (state = defaultState, action) => {
    switch(action.type){
        case 'RESET':
            state = defaultState
            return state
        case 'ADD_HARDWARE_RECORDING_NUMBER':
            state = {
                ...state, hardwareRecordingNumber:action.payload.hardwareRecordingNumber,
                isReadyToRecord:true
            }
            return state
        case 'CHANGE_RECORDING_STATE':
            let recordingState = state.isRecording ? false : true
            state = {
                ...state, isRecording:recordingState
            }
            return state
        case 'ADD_SYMPTOM':
            let newSymptomArray = state.symptomArray ?
                [...state.symptomArray, action.payload]:
                [action.payload]
            
            state = {...state, 
                symptomArray: newSymptomArray
            }
            return state
        case 'EDIT_SYMPTOM':
            return state
        default:
            return state
    }
}

const rootReducer = combineReducers({
    default:defaultReducer,
    currentRecording:currentRecording
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())