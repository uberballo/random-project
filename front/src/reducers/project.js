import { ADD_NEW_PROJECT, REMOVE_PROJECT } from '../constants/ActionTypes'

const removeProjectFromState = (state, action) => {
  const toRemoveId = action.filter
  const filteredState = state.filter((project) => project.id !== toRemoveId)
  return filteredState
}

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      return state.concat(action.data)
    case REMOVE_PROJECT:
      return removeProjectFromState(state, action)
    default:
      return state
  }
}

export default projectReducer
