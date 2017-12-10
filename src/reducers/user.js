import { Map } from 'immutable'
import { combineActions, handleActions } from 'redux-actions'
import { getVal as getValDeep } from '../lib'
import { ActionTypes as Actions } from '../actions'

const initialState = Map({
  email: 'hello@world.com'
})

// Selectors.
const absolutePath = ['user']
const getVal = (state, key) => getValDeep(state, absolutePath, key)

export const Selectors = {
  userEmail: state => getVal(state, 'email')
}

const actions = [
  Actions.UPDATE_USER_EMAIL
]

// Combined reducer.
export default handleActions({
  [combineActions(...actions)]: (state, action) => state.merge(action.payload)
}, initialState)
