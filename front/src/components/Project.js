import React from 'react'
import '../styles/person.css'

const Project = ({ project }) => {
  return (
    <div className="project">
      <p className="projectTitle">{project.title}</p>
      <p className="projectBody">{project.body}</p>
    </div>
  )
}

export default Project
