import { Map } from 'immutable'
import { getVal as getValDeep } from '../lib'

const initialState = Map({
  email: 'hello@world.com'
})

// Selectors.
const absolutePath = ['user']
const getVal = (state, key) => getValDeep(state, absolutePath, key)

export const Selectors = {
  userEmail: state => getVal(state, 'email')
}

// Placeholder reducer
const reducer = (state, action) => initialState
export default reducer
