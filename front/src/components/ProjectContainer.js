import React, { useState, useEffect } from 'react'
import projectService from '../services/projectService'
import NewProjectContainer from './NewProjectContainer'
import Project from './Project'

const ProjectContainer= () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await projectService.getProjects()
      console.log(result.data.data)
      if (!result.error) {
        setProjects(result.data.data)
      }
    }

    fetchData()
  }, [])


  const projectRow= () => {
     return projects?.map(project=> (
      <Project project={project}/>
    ))
  }

  return (
    <div>
      <NewProjectContainer projects={projects} setProjects={setProjects}/>
      <ul>{projectRow()}</ul>
    </div>
  )
}

export default ProjectContainer
