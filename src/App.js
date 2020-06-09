import React, { Component } from 'react'
import Blog from './containers/Blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Blog />
        </Router>
      </div>
    )
  }
}

export default App
