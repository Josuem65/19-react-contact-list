
import React from "react"
import logo from "./logo.svg"
import Home from "./Home.js"
// import ContactItem from "./ContactItem.js"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import "./App.css"
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}
export default App
