import React from 'react'
import { Button, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/project.css'

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
        <li>
          <Link to={`/project/${project.ID}`}>project</Link>
        </li>
        <List.Description>{project.description}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Project
