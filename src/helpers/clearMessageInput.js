import { MESSAGE_FIELD_ID } from "../store/constants";

export const clearMessageInput=()=>{
     document.getElementById(MESSAGE_FIELD_ID).value="";
}