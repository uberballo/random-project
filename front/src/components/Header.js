import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const Header = () => {
  const NotLoggedInLink = ({ name, path }) => {
    return user.loggedIn ? null : (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    )
  }
  const LoggedInLink = ({ name, path }) => {
    return user.loggedIn ? (
      <Menu.Item link href={path}>
        {name}
      </Menu.Item>
    ) : null
  }
  const user = useSelector((state) => state.user)
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
    </Menu>
  )
}

export default Header
