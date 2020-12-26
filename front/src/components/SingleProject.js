import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

const SingleProject = () => {
  const { projectID } = useParams()
  const project = useSelector((state) =>
    state.find((project) => (project.ID = projectID))
  )

  if (!project) {
    return <LoadingSpinner />
  }
  return (
    <div className="singleProject">
      <p className="projectTitle">{project.title}</p>
      <p className="projectBody">{project.body}</p>
    </div>
  )
}

export default SingleProject
