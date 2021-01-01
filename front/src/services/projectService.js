import axios from 'axios'
import axiosTryCatchWrapper from '../util/axiosWrapper'

const baseUrl = '/api/projects'

const getProjects = async () => {
  const res = await axiosTryCatchWrapper(() =>
    axios.get(baseUrl)
  )
  return res.data
}

const createProject = async (newProject) => {
  const res = await axiosTryCatchWrapper(() =>
    axios.post(baseUrl, {
      Title: newProject.title,
      Description: newProject.description,
      Body: newProject.body,
    })
  )
  return res.data
}

const removeProject = async (id) => {
  const res = await axiosTryCatchWrapper(() =>
    axios.delete(`${baseUrl}/${id}`)
  )
  return res
}

export default { getProjects, createProject, removeProject }
