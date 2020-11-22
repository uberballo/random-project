import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NewProjectContainer from './components/NewProjectContainer'
import ProjectContainer from './components/ProjectContainer'
import { ADD_NEW_PROJECT } from './constants/ActionTypes'
import projectService from './services/projectService'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const result = await projectService.getProjects()
      console.log(result)
      if (!result.error) {
        dispatch({ type: ADD_NEW_PROJECT, data: result.data })
      }
    }

    fetchData()
  }, [])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/project/new">New project</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/project/new">
            <NewProjectContainer />
          </Route>
          <Route path="/">
            <ProjectContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
