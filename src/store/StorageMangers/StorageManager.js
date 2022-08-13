import { MESSAGES, USERS } from "../constants";
import { User } from "../models/User";

export class StorageManager{
 
   static getParsedItem(item){
        return JSON.parse(localStorage.getItem(item));
    }
   static setParsedItem(item,value){
        localStorage.setItem(item,JSON.stringify([
            ...this.getParsedItem(item),
           value
        ]))
    }
    static initApp(){
        if(!localStorage.getItem(USERS)){
              localStorage.setItem(USERS,JSON.stringify([]));
        }
        if(!localStorage.getItem(MESSAGES)){
            localStorage.setItem(MESSAGES,JSON.stringify([]));
      }
    }
}