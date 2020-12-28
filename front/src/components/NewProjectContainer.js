import React from 'react'
import { useDispatch } from 'react-redux'
import { projectConstants } from '../constants/project.constants'
import useField from '../helpers/useField'
import projectService from '../services/projectService'
import ProjectForm from './ProjectForm'

const NewProjectContainer = () => {
  const titleField = useField('text')
  const descriptionField = useField('text')
  const bodyField = useField('text')
  const dispatch = useDispatch()

  const resetFields = (fields) => {
    fields.forEach((field) => field.reset())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProject = {
      title: titleField.value,
      description: descriptionField.value,
      body: bodyField.value,
    }
    const res = await projectService.createProject(newProject)

    if (res.error) return
    const addedProject = res.data.data
    dispatch({ type: projectConstants.ADD_NEW_PROJECT, data: addedProject })
    resetFields([titleField, descriptionField, bodyField])
  }

  return (
    <ProjectForm
      handleSubmit={handleSubmit}
      title={titleField}
      description={descriptionField}
      body={bodyField}
    />
  )
}

export default NewProjectContainer
