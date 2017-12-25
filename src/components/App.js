import React, { Component } from 'react'
import ExampleContainer from '../containers/ExampleContainer'

import {Header} from './index'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header title='BitBay Tracker' />
        <ExampleContainer />
      </div>
    )
  }
}

export default App
