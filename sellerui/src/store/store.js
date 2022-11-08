import {createStore} from 'redux'
import authreducer from './auth.reducer'
var store = new createStore(authreducer)
export default store