import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userConstants } from '../constants'
import { setToken } from '../services'
import useField from '../helpers/useField'
import userService from '../services/authService'
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
    const res = await userService.logUserIn(userInfo)
    if (res.code == 200) {
      console.log('here')
      dispatch({
        type: userConstants.LOGIN,
        data: res.data,
      })
      setToken(res.data)
      window.localStorage.setItem(
        'loggedUser',
        JSON.stringify(res.data)
      )
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
