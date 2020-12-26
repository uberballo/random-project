import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SingleProject = ({ project }) => {
  return (
    <Container className="singleProject">
      <Link to={`/project/${project.ID}`}>{project.title}</Link>
      <p className="projectBody">{project.body}</p>
    </Container>
  )
}

export default SingleProject
