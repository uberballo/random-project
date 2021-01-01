import React from 'react'
import { Menu } from 'semantic-ui-react'
import authService from '../services/authService'
import { isLoggedIn } from '../helpers/auth'
import CustomButton from './common/PrivateButton'

const Header = () => {
  const NotLoggedInLink = ({ name, path }) => {
    return isLoggedIn ? null : (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    )
  }
  const LoggedInLink = ({ name, path }) => {
    return isLoggedIn ? (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    ) : null
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
        func={authService.logUserOut}
        toShow={isLoggedIn}
      />
    </Menu>
  )
}

export default Header
