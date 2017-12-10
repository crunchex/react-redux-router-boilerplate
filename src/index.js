import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Redirect, Route } from 'react-router-dom'
import store, { history } from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// Test pages.
const Page1 = (props) => <div>Page 1</div>
const Page2 = (props) => <div>Page 2</div>

const Redirecter = (props) => {
  // TODO: keep an eye on a better workaround for the redirect warning.
  // https://github.com/guyellis/learn/issues/205
  const { match, location } = props
  const allowRedirect = match.url === location.pathname

  return allowRedirect ? <Redirect from='/' to='/app' /> : null
}

const mapStateToProps = (state, other) => ({
  location: other.location,
  match: other.match
})
const RedirecterContainer = connect(mapStateToProps)(Redirecter)

const Routes = (props) => {
  return (
    <div>
      <Route exact path={'/'} component={RedirecterContainer} />
      <Route exact path={'/app'} component={App} />
      <Route exact path={'/app/page/1'} component={Page1} />
      <Route exact path={'/app/page/2'} component={Page2} />
    </div>
  )
}

const rootComponent = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'))

registerServiceWorker()
