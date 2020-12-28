import { projectConstants } from '../constants'

const removeProjectFromState = (state, action) => {
  const toRemoveId = action.filter
  const filteredState = state.filter((project) => project.ID !== toRemoveId)
  return filteredState
}

export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case projectConstants.ADD_NEW_PROJECT:
      return state.concat(action.data)
    case projectConstants.REMOVE_PROJECT:
      return removeProjectFromState(state, action)
    default:
      return state
  }
}

export default projectReducer
