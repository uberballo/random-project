import React from 'react'
import { Menu } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu>
      <Menu.Item link href="/">
        Projects
      </Menu.Item>
      <Menu.Item link href="/project/new">
        New project
      </Menu.Item>
    </Menu>
  )
}

export default Header
