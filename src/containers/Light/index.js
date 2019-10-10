import React from 'react'

import { find, get } from 'lodash'
import { Button } from 'react-bootstrap'

function Light ({ lights, handleLightChange, match }){ 
    const light = find(lights,light => light.id == match.params.id)
    const toggleLight = () => {
        handleLightChange(light.id)       
    }
    return (
        <div>
            <h2>{get(light, "name","Light DNE")}</h2>
            <Button onClick={toggleLight} disabled={light.isOn}>ON</Button>
            <Button onClick={toggleLight} disabled={!light.isOn}>OFF</Button>
        </div>
    )
}

export default Light