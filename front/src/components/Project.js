import React from 'react'
import '../styles/project.css'



const Project = ({ project, removeProject }) => {
  return (
    <div className='project-item'>
      <p className='project-title'>{project.title}</p>
      <p className='project-description'>{project.description}</p>
      <button onClick={() => removeProject(project.id)}>X</button>
    </div>
  )
}

export default Project
