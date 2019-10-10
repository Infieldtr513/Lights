import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { LIGHTS } from "./constants"
import { mapContextToProps } from 'react-context-toolbox';
import { map } from 'lodash'
import { Link } from 'react-router-dom'

function Lights(){
    return(
        <div>
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Status</th>                
                </tr>
            </thead>
            <tbody>
                {map(LIGHTS, light =>              
                    <tr>                          
                        <td> 
                            <Link to={`/lights/${light.id}`}>{light.name} </Link>
                        </td> 
                        <td>{light.inOn ? "On" : "Off"}</td>
                    </tr>               
                )} 
            </tbody>
        </Table>
        </div>
    )
}

export default Lights