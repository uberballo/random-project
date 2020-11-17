import {
    ADD_NEW_PROJECT,
} from '../constants/ActionTypes'


const projectReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_PROJECT:

            return state.concat(action.data)
        default:
            return state
    }
}

export default projectReducer