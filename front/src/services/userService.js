import axios from 'axios'
import tryCatchWrapper from '../util/axiosWrapper'

const baseUrl = '/api/login'

const logUserIn = async (userInfo) => {
  const res = await axios.post(baseUrl, {
    username: userInfo.username,
    password: userInfo.password,
  })
  console.log('loginService ', res)
}

export default { logUserIn }
