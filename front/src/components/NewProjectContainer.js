import React from 'react'
import ProjectForm from './ProjectForm'
import useField from '../helpers/useField'
import projectService from '../services/projectService'

const NewProjectContainer = ({projects, setProjects}) => {
  const title = useField('text')
  const body = useField('text')

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await projectService.createProject({title: title, body: body})
    if (res.error) return
    setProjects([...projects, res.data])
  }

  return <ProjectForm handleSubmit={handleSubmit} title={title} body={body} />
}

export default NewProjectContainer 