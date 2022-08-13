import { combineReducers } from "redux";
import { messagesReducer } from "./MessageReducer";
import { usersReducer } from "./UserReducers";

export default combineReducers({
    users:usersReducer,
    messages:messagesReducer
})