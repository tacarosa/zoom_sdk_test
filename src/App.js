import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import main from './page/main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={main} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
