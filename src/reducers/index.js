import { combineReducers } from 'redux'
import count from './count'
import status from './status'

const app = combineReducers({ count, status })
export default app