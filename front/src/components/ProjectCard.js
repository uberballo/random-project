import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CustomButton from './common/PrivateButton'
import { addProjectToUser } from '../services/userService'
import { isLoggedIn } from '../helpers/auth'
import '../styles/project.css'

const Project = ({ project, removeProject }) => {
  return (
    <List.Item>
      <List.Content>
        <CustomButton
          label="Remove"
          className="remove-button"
          func={removeProject}
          params={project.ID}
          toShow={isLoggedIn}
        />
        <CustomButton
          label="Add"
          className="add-button"
          func={addProjectToUser}
          params={project.ID}
          toShow={isLoggedIn}
        />
        <List.Header>
          <li>
            <Link to={`/project/${project.ID}`}>
              {project.title}
            </Link>
          </li>
        </List.Header>
        <List.Description>
          {project.description}
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Project
