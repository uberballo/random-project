import axios from 'axios'
import { getToken } from './index'
import tryCatchWrapper from '../util/axiosWrapper'
import { isLoggedIn } from '../helpers/auth'

const baseUrl = '/api/user'

export const addProjectToUser = async (projectID) => {
  console.log(getToken())
  isLoggedIn()
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {})
  )
  return res.data
}
