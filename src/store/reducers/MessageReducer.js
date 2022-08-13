import { combineReducers } from 'redux'
import { ADD_MESSAGE, FETCH_MESSAGES } from '../Actions/ActionsTypes'

const inistState = {
    messages: [],

}
export function messagesReducer(state = inistState, action) {
    const payload = action.payload
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages = [...state.messages, payload]
            return { ...state, item: payload }
        case FETCH_MESSAGES:
            state.messages = [...payload]
            return { ...state, item: payload }
        default:
            return { ...inistState }

    }
}

