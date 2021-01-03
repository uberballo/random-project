import axios from 'axios'
import { getToken } from './index'
import axiosTryCatchWrapper from '../util/axiosWrapper'
import { isLoggedIn } from '../helpers/auth'

const baseUrl = '/api/user'

export const addProjectToUser = async (projectID) => {
  const body = {
    projectID: projectID,
  }
  const token = getToken()
  const config = {
    headers: { Authorization: token },
  }

  const res = await axiosTryCatchWrapper(() =>
    axios.post(`${baseUrl}/project/chosen`, body, config)
  )
  return res.data
}

const createUser = async (userInfo) => {
  const body = {
    username: userInfo.username,
    password: userInfo.password,
  }
  const res = await axiosTryCatchWrapper(() =>
    axios.post(baseUrl, body)
  )

  return res.data
}

export default { createUser }
