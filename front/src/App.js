import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import NewProjectContainer from './components/NewProjectContainer'
import ProjectContainer from './components/ProjectContainer'
import { projectConstants } from './constants'
import projectService from './services/projectService'
import { Container } from 'semantic-ui-react'
import SingleProjectCard from './components/SingleProjectCard'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const result = await projectService.getProjects()
      const projects = result.data.projects
      console.log(result)
      if (!result.error) {
        dispatch({ type: projectConstants.ADD_NEW_PROJECT, data: projects })
      }
    }

    fetchData()
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
          <Route path="/project/:projectID">
            <SingleProjectCard />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
