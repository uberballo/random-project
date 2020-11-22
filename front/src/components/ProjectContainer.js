import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_PROJECT } from '../constants/ActionTypes'
import projectService from '../services/projectService'
import Project from './Project'
import SingleProject from './SingleProject'

const ProjectContainer = () => {
  const projects = useSelector(state => state)
  const [randomProject, setRandomProject] = useState({})
  const dispatch = useDispatch()

  const removeProject = async (projectId) => {
    const res = await projectService.removeProject(projectId)
    if (res.status !== 200) return
    dispatch({ type: REMOVE_PROJECT, filter: projectId })
  }

  const getRandomProject = () => {
    const project = projects[Math.floor(Math.random() * projects.length)]
    setRandomProject(project)
  }

  const projectRow = () => {
    return projects?.map(project => (
      <Project project={project} key={project.id} removeProject={removeProject} />
    ))
  }

  return (
    <div>
      <button onClick={() => getRandomProject()}>random</button>
      {randomProject ? <SingleProject project={randomProject} /> : null}
      <ul>{projectRow()}</ul>
    </div>
  )
}

export default ProjectContainer
