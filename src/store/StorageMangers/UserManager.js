import { USERS } from "../constants";
import { StorageManager } from "./StorageManager";

export class UserManager extends StorageManager{

    static addUser(username){
       this.setParsedItem(USERS,username);
     }

    static checkUserExist(username){
        return this.getParsedItem(USERS).includes(username);
     }

}