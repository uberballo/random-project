import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import LoginContainer from './components/LoginContainer'
import NewProjectContainer from './components/NewProjectContainer'
import ProfileContainer from './components/ProfileContainer'
import ProjectContainer from './components/ProjectContainer'
import SignUpContainer from './components/SignUpContainer'
import SingleProjectCard from './components/SingleProjectCard'
import { projectConstants } from './constants'
import { isLoggedIn } from './helpers/auth'
import authService from './services/authService'
import projectService from './services/projectService'

const App = () => {
  const dispatch = useDispatch()

  const fetchData = async () => {
    const result = await projectService.getProjects()
    const projects = result.data.projects
    console.log(result)
    if (!result.error) {
      dispatch({
        type: projectConstants.ADD_NEW_PROJECT,
        data: projects,
      })
    }
  }

  const fetchUserFromLocalStorage = () => {
    const loggedUser = JSON.parse(
      window.localStorage.getItem('loggedUser')
    )
    if (loggedUser) {
      authService.logInUser(loggedUser)
    }
  }

  useEffect(() => {
    fetchData()
    fetchUserFromLocalStorage()
  }, [])

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/project/new">
            <NewProjectContainer />
          </Route>
          <Route exact path="/">
            <ProjectContainer />
          </Route>
          <Route exact path="/profile">
            <ProfileContainer />
          </Route>
          <Route path="/project/:projectID">
            <SingleProjectCard />
          </Route>
          <Route exact path="/profile">
            {isLoggedIn() ? (
              <ProfileContainer />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/signup">
            <SignUpContainer />
          </Route>
          <Route exact path="/login">
            {isLoggedIn() ? (
              <Redirect to="/profile" />
            ) : (
              <LoginContainer />
            )}
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
