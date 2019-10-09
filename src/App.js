import React, { useState } from "react"
import { reduce } from 'lodash'
import './App.css';
import { subscribe } from 'mqtt-react';


function App({ mqtt }){
  const handleClick = (event) => mqtt.publish("/lights", "0000")
  
  const [floor, setFloor] = useState(1)
  const [lights, setLights] = useState({ 1: [], 2: [], 3: [], 4: [] })
  
  const handleFloorSelection = (event) => {
    setFloor(event.target.value)
  }

  const handleLightChange = (event) => {    
    let lightSet = lights[floor]
    if(event.target.checked && lights[floor].includes(event.target.value)) return;
    if(event.target.checked && !lights[floor].includes(event.target.value)) lightSet.push(event.target.value);
    if(!event.target.checked && lights[floor].includes(event.target.value)) lightSet = lightSet.filter(light => light != event.target.value);
    if(!event.target.checked && !lights[floor].includes(event.target.value)) return;

    
    setLights({
      ...lights,
     [floor]: lightSet
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    reduce(lights)
    const result = reduce(lights, (lightAccumulator, lightSet, floor) => {
      console.log('floor', floor)
      console.log('lightSet', lightSet)
      lightSet.forEach(light => {        
        lightAccumulator += Math.pow(2, 
          (parseInt(light) + ((parseInt(floor) - 1) * (8))) -1
        )
      })
      return lightAccumulator
    }, 0)
    
    console.log('submission result', result)
    console.log('light state', lights)

    mqtt.publish("/lights", result.toString())
  }

  return (
    <div className="App">
      <form>
        <fieldset>
            <legend>Which rooms(s) would you like to change?</legend>
              <p><label> <input onChange={handleFloorSelection} type="radio" name="floor" value={1} checked={floor == 1} /> First </label> </p>
              <p><label> <input onChange={handleFloorSelection} type="radio" name="floor" value={2} checked={floor == 2} /> Second </label> </p>
              <p><label> <input onChange={handleFloorSelection} type="radio" name="floor" value={3} checked={floor == 3}/> Third </label> </p>
              <p><label> <input onChange={handleFloorSelection} type="radio" name="floor" value={4} checked={floor == 4}/> Fourth </label> </p>
        </fieldset>
        <fieldset>
          <legend>Which lights(s) would you like to set?</legend>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="topMid" checked={lights[floor].includes('1') } value={1} /> Top Middle </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="lfTop" checked={lights[floor].includes('2')} value={2} /> Right Top </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="lfBot" checked={lights[floor].includes('3')} value={3} /> Right Bottom </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="botMid" checked={lights[floor].includes('4')} value={4} /> Bottom Middle </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="rtBot" checked={lights[floor].includes('5')} value={5} /> Left Bottom </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="rtTop" checked={lights[floor].includes('6')} value={6} /> Left Top </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="midMid" checked={lights[floor].includes('7')} value={7} /> Middle Middle </label> </p>
            <p><label> <input onChange={handleLightChange} type="checkbox" name="decimal" checked={lights[floor].includes('8')} value={8} /> Decimal </label> </p>
        </fieldset>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>   
  );
}

export default subscribe({
  topic: "/lights"
})(App);
