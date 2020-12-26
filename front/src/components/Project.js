import React from 'react'
import '../styles/project.css'
import { Button, List } from 'semantic-ui-react'

const Project = ({ project, removeProject }) => {
  return (
    <List.Item>
      <List.Content>
        <Button
          className="remove-button"
          onClick={() => removeProject(project.ID)}
        >
          Remove
        </Button>
        <List.Header>{project.title}</List.Header>
        <List.Description>{project.description}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Project
