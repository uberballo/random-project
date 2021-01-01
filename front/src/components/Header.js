import React from 'react'
import { Menu } from 'semantic-ui-react'
import authService from '../services/authService'
import { isLoggedIn } from '../helpers/auth'
import CustomButton from './common/PrivateButton'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Header = withRouter(({ history }) => {
  const user = useSelector((state) => state.user)
  const loggedIn = user.loggedIn

  const NotLoggedInLink = ({ name, path }) => {
    return loggedIn ? null : (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    )
  }

  const LoggedInLink = ({ name, path }) => {
    return loggedIn ? (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    ) : null
  }

  const logOutRedirect = () => {
    authService.logUserOut()
    history.push('/')
  }

  return (
    <Menu>
      <Menu.Item link href="/">
        Projects
      </Menu.Item>
      <Menu.Item link href="/project/new">
        New project
      </Menu.Item>
      <NotLoggedInLink name="Login" path="/login" />
      <LoggedInLink name="Profile" path="/profile" />
      <CustomButton
        label="Log out"
        className="logout-button"
        func={logOutRedirect}
        toShow={loggedIn}
      />
    </Menu>
  )
})

export default Header
