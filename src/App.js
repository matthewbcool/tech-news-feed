import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  return (
    <div className='App'>
      <Header />

      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

export default App
