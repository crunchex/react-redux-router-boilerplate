import { createAction } from 'redux-actions'

const ActionTypes = {
  UPDATE_USER_EMAIL: 'UPDATE_USER_EMAIL'
}

// Action creators.
const updateUserEmail = createAction(ActionTypes.UPDATE_USER_EMAIL, email => ({ email }))

const ActionCreators = {
  updateUserEmail
}

export { ActionTypes, ActionCreators }
