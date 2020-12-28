import { userConstants } from '../constants'

const defaultState = {
  loggedIn: false,
  user: {},
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        loggedIn: true,
        user: { ...action.data },
      }
    case userConstants.LOGOUT:
      localStorage.clear()
      return {
        loggedIn: false,
        user: {},
      }
    default:
      return state
  }
}
