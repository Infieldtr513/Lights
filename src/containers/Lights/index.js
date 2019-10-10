import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { mapContextToProps } from 'react-context-toolbox';
import { map } from 'lodash'
import { Link } from 'react-router-dom'

function Lights({lights}){
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
                {map(lights, light =>              
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