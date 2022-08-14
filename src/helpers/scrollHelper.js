import { MESSAGES_WRAPPER_ID, SMALL_DELAY } from "../store/constants";

export function scrolHelper(){
    setTimeout(()=>{
        document.getElementsByClassName(MESSAGES_WRAPPER_ID)[0].scrollTop =
           document.getElementsByClassName(MESSAGES_WRAPPER_ID)[0].scrollHeight;
    },SMALL_DELAY)
}