import React from 'react'
import { LIGHTS } from '../Lights/constants'
import { find, get } from 'lodash'


function Light ({ match }){ 
    const light = find(LIGHTS,light => light.id == match.params.id)
    
    return (
        <div>{get(light, "name","Light DNE")}</div>
    )
}

export default Light