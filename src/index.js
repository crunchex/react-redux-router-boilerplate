import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'))

registerServiceWorker()
