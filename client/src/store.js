import { createStore, combineReducers } from 'redux'
import { currentRecording } from './store/recordingReducer'
import { recordingReducerV2 } from './store/recordingReducerV2'
const JWT = require('jsonwebtoken')

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

            console.log(action.payload)

            let jwtData = JWT.verify(action.payload.jwt, process.env.JWT_KEY ?? 'yellowMonkey2020')

            console.log(jwtData._doc)

            state = {
                ...state,
                username: jwtData._doc.username.toLowerCase()
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