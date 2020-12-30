import axios from 'axios'
import { getToken } from './index'
import tryCatchWrapper from '../util/axiosWrapper'
import { isLoggedIn } from '../helpers/auth'

const baseUrl = '/api/user/project'

export const addProjectToUser = async (projectID) => {
  const body = {
    projectID: projectID,
  }
  const token = getToken()
  const config = {
    headers: { Authorization: token },
  }
  console.log(config)
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, body, config)
  )
  return res.data
}
