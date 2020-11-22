import React from 'react'
import '../styles/project.css'



const Project = ({ project, removeProject }) => {
  return (
    <div className='project-item'>
      <p className="projectTitle">{project.title}</p>
      <button onClick={() => removeProject(project.id)}>X</button>
    </div>
  )
}

export default Project
