import axios from 'axios'

const baseUrl = '/api/projects'

const tryCatchWrapper = async (func) => {
  try {
    const res = await func()
    return res
  } catch (e) {
    return {
      error: e,
    }
  }
}

const getProjects = async () => {
  const res = await tryCatchWrapper(() => axios.get(baseUrl))
  return res.data
}

const createProject = async (newProject) => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      Title: newProject.title,
      Body: newProject.body,
    })
  )
  return res
}

const removeProject = async (id) => {
  const res = await tryCatchWrapper(() => axios.delete(`${baseUrl}/${id}`))
  return res
}

export default { getProjects, createProject, removeProject }
