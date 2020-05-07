import { combineReducers } from 'redux'
import notReducer from './notReducer'
export default combineReducers({
   notes:notReducer
})

