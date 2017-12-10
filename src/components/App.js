import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={() => this.props.updateUserEmail('world@hello.com')}>
          {this.props.userEmail}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => this.props.goTo('/app/page/1')}>Page 1</button>
          <button onClick={() => this.props.goTo('/app/page/2')}>Page 2</button>
        </div>
      </div>
    )
  }
}

export default App
