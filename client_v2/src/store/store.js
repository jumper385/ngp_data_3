import { createStore, combineReducers } from 'redux'

const defaultReducer = (state = {}, action) => {
    switch(action.type){
        default:
            return state
    }
}

const appStateReducer = (state={},action) => {

    switch(action.type){

        case 'LOGIN':

            const {details, status} = action.payload
            state = {...state, loggedIn: status, username: status && details.username, firstName: status && details.firstName, lastName: status && details.lastName}
            return state

        case 'TOGGLE_MENU':

            state = {...state, menu_open:state.menu_open ? false : true}
            return state 

        default:
            return state
    }

}

const rootReducer = combineReducers({
    default: defaultReducer,
    app_state: appStateReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())