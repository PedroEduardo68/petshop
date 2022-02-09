import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

function App() {
  {/* const Router = () => {
    const location = window.location.pathname
    if (location === '/sobre') {
      return <Sobre />
    } else {
      return <Home />
    }
  }
*/}

  return (
    <>
      <Router >
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/sobre' exact>
            <Sobre />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
