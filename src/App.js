import React, { useState } from "react"
import { reduce, findIndex } from 'lodash'
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
import { LIGHTS } from "./containers/Lights/constants";

function App( { mqtt } ){ 
  const [lightDisplay, setLightDisplay] = useState(LIGHTS)

  const publishToggle = () => {
    mqtt.publish("/lights", "255")
  }

  const handleLightChange = (lightId) => {
    const newLightDisplay = [...lightDisplay]
    const lightIndex = findIndex(newLightDisplay, light => light.id == lightId)
    
    newLightDisplay[lightIndex].isOn = !newLightDisplay[lightIndex].isOn
    setLightDisplay(newLightDisplay)
    publishToggle()
  }

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
        <Route path="/lights/:id" render={props => 
          <Light {...props} handleLightChange={handleLightChange} lights={lightDisplay}/>
        }/>                  />             
        <Route path="/lights" render={props => 
          <Lights {...props} lights={lightDisplay}/>
        }/>                 
        </Switch>
      </div>
    </Router>
    </div>   
  );
}
export default subscribe({
  topic: '/lights'
})(App)
  // topic: "/lights"


// lightAccumulator += Math.pow(2, 
//   (parseInt(light) + ((parseInt(floor) - 1) * (8))) -1
// )