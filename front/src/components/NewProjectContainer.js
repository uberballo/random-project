import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_NEW_PROJECT } from '../constants/ActionTypes'
import useField from '../helpers/useField'
import projectService from '../services/projectService'
import ProjectForm from './ProjectForm'

const NewProjectContainer = () => {
  const title = useField('text')
  const description = useField('text')
  const body = useField('text')
  const dispatch = useDispatch()

  const resetFields = (fields) => {
    fields.forEach((field) => field.reset())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProject = {
      title: title.value,
      description: description.value,
      body: body.value,
    }
    const res = await projectService.createProject(newProject)

    if (res.error) return
    const addedProject = res.data.data
    dispatch({ type: ADD_NEW_PROJECT, data: addedProject })
    resetFields([title, description, body])
  }

  return (
    <ProjectForm
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      body={body}
    />
  )
}

export default NewProjectContainer
