import React, { useState } from "react"
import { reduce } from 'lodash'
import './App.css';
import { subscribe } from 'mqtt-react';
import Lights from "./containers/Lights"
import Light from "./containers/Light"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap'

function App({ mqtt }){
  
  return (
    <div className="App">
      <Router>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
         <Nav.Link> <Link to="/lights">Lights</Link></Nav.Link>
        </Nav.Item>        
      </Nav>
      <div>
        <Switch>
        <Route path="/lights/:id" component={Light} />             
        <Route path="/lights" component={Lights}/>                 
        </Switch>
      </div>
    </Router>
    </div>   
  );
}

export default subscribe({
  topic: "/lights"
})(App);




// lightAccumulator += Math.pow(2, 
//   (parseInt(light) + ((parseInt(floor) - 1) * (8))) -1
// )