import axios from 'axios'
import tryCatchWrapper from '../util/axiosWrapper'

const baseUrl = '/api/login'

const logUserIn = async (userInfo) => {
  const res = await axios.post(baseUrl, {
    username: userInfo.username,
    password: userInfo.password,
  })
  return res.data
}

export default { logUserIn }
