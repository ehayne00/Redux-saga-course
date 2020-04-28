import {combineReducers} from 'redux'
import UsersReducer from './users.js'


export default combineReducers({
    users: UsersReducer
})
