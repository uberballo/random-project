import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userConstants } from '../constants'
import { setToken } from '../services'
import useField from '../helpers/useField'
import authService from '../services/authService'
import Login from './Login'

const LoginContainer = withRouter(({ history }) => {
  const usernameField = useField('text')
  const passwordField = useField('text')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userInfo = {
      username: usernameField.value,
      password: passwordField.value,
    }
    const res = await authService.postLogInRequest(userInfo)
    if (res.code == 200) {
      authService.logInUser(res.data)
      history.push('/')
    }
    console.log(res)
  }

  return (
    <Login
      handleSubmit={handleSubmit}
      username={usernameField}
      password={passwordField}
    />
  )
})
export default LoginContainer
