import axios from 'axios'
import tryCatchWrapper from '../util/axiosWrapper'

const baseUrl = '/api/projects'

const getProjects = async () => {
  const res = await tryCatchWrapper(() =>
    axios.get(baseUrl)
  )
  return res.data
}

const createProject = async (newProject) => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      Title: newProject.title,
      Description: newProject.description,
      Body: newProject.body,
    })
  )
  return res.data
}

const removeProject = async (id) => {
  const res = await tryCatchWrapper(() =>
    axios.delete(`${baseUrl}/${id}`)
  )
  return res
}

export default { getProjects, createProject, removeProject }
