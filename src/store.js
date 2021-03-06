import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { Iterable, Map } from 'immutable'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

// Enhancers
const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

// Middleware
export const history = createHistory()
const router = routerMiddleware(history)

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS()
  else return state
}
const actionTypeBlacklist = []
const predicate = (getState, action) => {
  const typeHasBlacklisted = actionTypeBlacklist.reduce((acc, v) => acc || action.type.includes(v), false)
  return !typeHasBlacklisted
}
const logger = createLogger({ stateTransformer, predicate, collapsed: true })

const middleware = [ router, logger ]

// Composition
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

// Store
const initialState = Map()
export default createStore(rootReducer, initialState, composedEnhancers)
