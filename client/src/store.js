import { createStore, combineReducers } from 'redux'
import { currentRecording } from './store/recordingReducer'
import { recordingReducerV2 } from './store/recordingReducerV2'

const defaultState = {}

const defaultReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const metaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_JWT':
            let { loggedIn, jwt } = action.payload
            state = { ...state, loggedIn: loggedIn, jwt: jwt }
            return state

        case 'ADD_USER_DETAILS':
            state = {
                ...state,
                username: action.payload.toLowerCase()
            }
            return state
            
        default:
            return state
    }
}

const rootReducer = combineReducers({
    default: defaultReducer,
    metaReducer: metaReducer,
    currentRecording: currentRecording,
    recordingReducer: recordingReducerV2
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())