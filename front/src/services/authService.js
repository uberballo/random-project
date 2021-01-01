import axios from 'axios'
import { store } from '../index'
import { setToken } from '.'
import { userConstants } from '../constants'
import axiosTryCatchWrapper from '../util/axiosWrapper'

const baseUrl = '/api/login'

const postLogInRequest = async (userInfo) => {
  const res = await axios.post(baseUrl, {
    username: userInfo.username,
    password: userInfo.password,
  })
  return res.data
}
const logInUser = (data) => {
  store.dispatch({
    type: userConstants.LOGIN,
    data: data.token,
  })
  console.log('Tokenista tulee: ', data.token)
  setToken(data.token)
  window.localStorage.setItem(
    'loggedUser',
    JSON.stringify(data)
  )
}

const logUserOut = () => {
  store.dispatch({
    type: userConstants.LOGOUT,
  })
  setToken('')
  window.localStorage.clear()
}

export default { postLogInRequest, logInUser, logUserOut }
