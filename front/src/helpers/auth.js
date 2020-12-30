import { store } from '../index'

export const isLoggedIn = () => {
  const res = store.getState().user.loggedIn
  return res
}
