import React from 'react'

const SingleProject = ({ project }) => {
  return (
    <div className="singleProject">
      <p className="projectTitle">{project.title}</p>
      <p className="projectBody">{project.body}</p>
    </div>
  )
}

export default SingleProject
