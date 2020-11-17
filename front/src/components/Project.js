import React from 'react'
import '../styles/person.css'

const Project = ({ project, removeProject }) => {
  return (
    <div className="project">
      <p className="projectTitle">{project.title}</p>
      <p className="projectBody">{project.body}</p>
      <button onClick={() => removeProject(project.id)}>X</button>
    </div>
  )
}

export default Project
