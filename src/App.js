import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Products,
  Error,} from './pages'

function App() {
  return (
    <Router>
      < Navbar />
      <Sidebar />
      <Switch>
        
        <Route exact path = '/products'>
          <Products />
        </Route>
       
        <Route exact path = '*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
