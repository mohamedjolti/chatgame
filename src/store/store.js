import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux'
import ChatApp from './reducers/index';
const middleware=[thunk]
const initialState={}
export const store=createStore(ChatApp,initialState,applyMiddleware(...middleware));