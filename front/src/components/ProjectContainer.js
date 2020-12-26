import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'semantic-ui-react'
import { REMOVE_PROJECT } from '../constants/ActionTypes'
import projectService from '../services/projectService'
import Project from './Project'
import RandomProjectCard from './RandomProjectCard'

const ProjectContainer = () => {
  const projects = useSelector((state) => state)
  const [randomProject, setRandomProject] = useState({})
  const dispatch = useDispatch()

  const removeProject = async (projectId) => {
    const res = await projectService.removeProject(projectId)
    console.log(res)
    console.log(res.status)
    if (res.status !== 200) return
    dispatch({ type: REMOVE_PROJECT, filter: projectId })
  }

  const getRandomProject = () => {
    const project = projects[Math.floor(Math.random() * projects.length)]
    setRandomProject(project)
  }

  const projectRow = () => {
    return projects?.map((project) => (
      <Project
        project={project}
        key={project.ID}
        removeProject={removeProject}
      />
    ))
  }

  return (
    <div>
      <button onClick={() => getRandomProject()}>random</button>
      {randomProject ? <RandomProjectCard project={randomProject} /> : null}
      <List divided relaxed size="large">
        {projectRow()}
      </List>
    </div>
  )
}

export default ProjectContainer
