import { MESSAGES } from "../constants";
import { StorageManager } from "./StorageManager";

export class MessageManager extends StorageManager{
    static getMessages(){
        return this.getParsedItem(MESSAGES);
     }
      
     /**
      * 
      * @param {Message} message 
      */
    static addMessage(message){
          this.setParsedItem(MESSAGES,message);
     }
}