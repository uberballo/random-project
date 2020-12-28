import Login from './Login'
import React from 'react'
import useField from '../helpers/useField'
import userService from '../services/userService'

const LoginContainer = () => {
  const usernameField = useField('text')
  const passwordField = useField('text')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userInfo = {
      username: usernameField.value,
      password: passwordField.value,
    }
    const res = await userService.logUserIn(userInfo)
    console.log(res)
  }

  return (
    <Login
      handleSubmit={handleSubmit}
      username={usernameField}
      password={passwordField}
    />
  )
}
export default LoginContainer
