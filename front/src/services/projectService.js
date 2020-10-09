import axios from 'axios'

const baseUrl = '/api/projects'

const tryCatchWrapper = async func => {
  try {
    const res = await func()
    return res
  } catch (e) {
    return {
      error: e,
    }
  }
}

const getProjects= async () => {
  const res = await tryCatchWrapper(() => axios.get(baseUrl))
  console.log(res)
  return res
}

const createProject = async newProject => {
  const res = await tryCatchWrapper(() =>
    axios.post(baseUrl, {
      Title: newProject.title,
      Body: newProject.body,
    })
  )
  console.log(res)
  return res
}

const removePerson = async id => {
  const res = await tryCatchWrapper(() => axios.delete(`${baseUrl}/${id}`))
  return res
}

export default { getProjects, createProject}
