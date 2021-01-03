import React from 'react'
import { withRouter } from 'react-router-dom'
import userService from '../services/userService'
import SignUp from './SignUp'
import useField from '../helpers/useField'

const SignUpContainer = withRouter(({ history }) => {
  const usernameField = useField('text')
  const passwordField = useField('text')

  const handleSubmit = async (e) => {
    const userInfo = {
      username: usernameField.value,
      password: passwordField.value,
    }
    const res = await userService.createUser(userInfo)
    if (res.code == 200) {
      history.push('/login')
    }
    console.log(res)
  }

  return (
    <SignUp
      handleSubmit={handleSubmit}
      username={usernameField}
      password={passwordField}
    />
  )
})

export default SignUpContainer
