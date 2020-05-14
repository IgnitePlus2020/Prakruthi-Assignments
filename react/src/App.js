import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavigationBar } from './components/NavigationBar'
import Drop from './components/Drop'
import ShowTable from './components/ShowTable'
import Form  from './components/Form'
import SearchB from './components/SearchB'
import Home from './components/Home'
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        

        <Switch>
        <Route exact path="/home" component={ Home } />
          <Route path="/form" component={ Form } />
          <Route path="/items" component={Drop} />
          <Route path="/table" component={ShowTable} />
          <Route path="/search" component={SearchB} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
