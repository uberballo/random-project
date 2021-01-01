import axios from 'axios'
import { getToken } from './index'
import axiosTryCatchWrapper from '../util/axiosWrapper'
import { isLoggedIn } from '../helpers/auth'

const baseUrl = '/api/user/project/'

export const addProjectToUser = async (projectID) => {
  const body = {
    projectID: projectID,
  }
  const token = getToken()
  const config = {
    headers: { Authorization: token },
  }

  const res = await axiosTryCatchWrapper(() =>
    axios.post(`${baseUrl}/chosen`, body, config)
  )
  return res.data
}
