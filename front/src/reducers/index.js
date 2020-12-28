import { combineReducers } from 'redux'

import { projectReducer } from './projectReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  projects: projectReducer,
  user: userReducer,
})

export default rootReducer
