import { combineReducers } from 'redux'
import { ADD_USER } from '../Actions/ActionsTypes'

const inistState={
    users:[],
    isLogged:false,
    username:""
}
export function usersReducer(state=inistState,action){
      const payload =action.payload
      switch(action.type){
         case ADD_USER:
             state.users=[...state.users,payload]
             state.username=payload
             state.isLogged=true
             
           return {...state,item:payload}
         default:
            return inistState
        }
        

    }

