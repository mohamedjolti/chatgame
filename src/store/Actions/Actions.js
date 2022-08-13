import { MessageManager } from "../StorageMangers/MessageManger";
import { StorageManager } from "../StorageMangers/StorageManager";
import { UserManager } from "../StorageMangers/UserManager";
import { store } from "../store";
import { ADD_MESSAGE, ADD_USER, FETCH_MESSAGES } from "./ActionsTypes";

export const addUser = (username) => (dispatch) => {
    StorageManager.initApp()
    if (!UserManager.checkUserExist(username)) {
        UserManager.addUser(username);
    }
    return  dispatch({
        type: ADD_USER,
        payload: username
    })
}
export const fetchMessges = () => (dispatch) => {
    return dispatch({
        type: FETCH_MESSAGES,
        payload: MessageManager.getMessages()
    })
}


export const addMessage = (message) => (dispatch) => {
    MessageManager.addMessage(message);
    return dispatch({
        type: ADD_MESSAGE,
        payload: message
    })
}

