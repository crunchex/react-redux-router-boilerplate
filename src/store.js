import { createStore, applyMiddleware, compose } from 'redux'

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
const initialState = {}
export default createStore((state, action) => state, initialState, composedEnhancers)
