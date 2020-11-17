import React from 'react'
import ProjectForm from './ProjectForm'
import useField from '../helpers/useField'
import projectService from '../services/projectService'
import { useDispatch } from 'react-redux'

import {
  ADD_NEW_PROJECT,
} from '../constants/ActionTypes'

const NewProjectContainer = ({ projects, setProjects }) => {
  const title = useField('text')
  const body = useField('text')
  const dispatch = useDispatch()

  const resetFields = (fields) => {
    fields.forEach(field => field.reset())
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const newProject = { title: title.value, body: body.value }
    const res = await projectService.createProject(newProject)

    if (res.error) return
    const addedProject = res.data.project
    dispatch({ type: ADD_NEW_PROJECT, data: addedProject })
    resetFields([title, body])
  }

  return <ProjectForm handleSubmit={handleSubmit} title={title} body={body} />
}

export default NewProjectContainer 