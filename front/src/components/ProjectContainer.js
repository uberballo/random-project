import React, { useState, useEffect } from 'react'
import projectService from '../services/projectService'
import NewProjectContainer from './NewProjectContainer'
import { useDispatch, useSelector } from 'react-redux'
import Project from './Project'
import {
  ADD_NEW_PROJECT, REMOVE_PROJECT,
} from '../constants/ActionTypes'

const ProjectContainer = () => {
  const projects = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const result = await projectService.getProjects()
      console.log(result)
      if (!result.error) {
        dispatch({ type: ADD_NEW_PROJECT, data: result.data })
      }
    }

    fetchData()
  }, [])

  const removeProject = async (projectId) => {
    const res = await projectService.removeProject(projectId)
    if (res.status !== 200) return
    dispatch({ type: REMOVE_PROJECT, filter: projectId })
  }
  const projectRow = () => {
    return projects?.map(project => (
      <Project project={project} key={project.id} removeProject={removeProject} />
    ))
  }

  return (
    <div>
      <NewProjectContainer />
      <ul>{projectRow()}</ul>
    </div>
  )
}

export default ProjectContainer
