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
                ...state, isRecording:recordingState,
                recordingClickCounter: state.recordingClickCounter+1 || 1,
            }
            return state

        case 'ADD_SHORTCUT_SYMPTOM':
            state = {...state, 
                symptomArray: state.symptomArray ?
                [...state.symptomArray, action.payload] :
                [action.payload],
                isComplex:false
            }
            return state

        case 'EDIT_SYMPTOM':
            let newSymptom = {
                ...state.currSymptom || null,
                ...action.payload,
            }
            state = { 
                ...state, 
                currSymptom:newSymptom,
                isComplex: state.isComplex ? false : true
            }
            return state
            
        case 'ADD_SYMPTOM':

            state = {...state, 
                symptomArray: state.symptomArray ?
                [...state.symptomArray, {...state.currSymptom, ...action.payload} || null] :
                [{...state.currSymptom, ...action.payload} || null],
                isComplex:false
            }

            state.currSymptom = {}

            return state
        
        case 'ADD_RATING':

            state = {
                ...state, 
                rating: action.payload,
                isReadyToRecord:false,
                isRecording:false
            }

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