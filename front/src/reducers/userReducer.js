import { userConstants } from '../constants'

const defaultState = {
  loggedIn: false,
  user: '',
}

export const userReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log('Login')
      console.log(state)
      return {
        loggedIn: true,
        user: action.data,
      }
    case userConstants.LOGOUT:
      console.log('logout')
      localStorage.clear()
      return {
        loggedIn: false,
        user: '',
      }
    default:
      console.log(state)
      return state
  }
}
