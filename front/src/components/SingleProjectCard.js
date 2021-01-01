import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
import { Container, Header } from 'semantic-ui-react'

const SingleProject = () => {
  const { projectID } = useParams()
  const project = useSelector((state) =>
    state.projects.find(
      (project) => project.ID === Number(projectID)
    )
  )

  if (!project) {
    return <LoadingSpinner label="project" />
  }

  return (
    <Container className="singleProject">
      <Header as="h2">{project.title}</Header>
      <Header as="h3">{project.description}</Header>
      <p className="projectBody">{project.body}</p>
    </Container>
  )
}

export default SingleProject
