import { createStore, applyMiddleware, compose } from 'redux'
import { Map } from 'immutable'
import rootReducer from './reducers'

// Enhancers
const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const middleware = []

// Composition
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

// Store
const initialState = Map()
export default createStore(rootReducer, initialState, composedEnhancers)
