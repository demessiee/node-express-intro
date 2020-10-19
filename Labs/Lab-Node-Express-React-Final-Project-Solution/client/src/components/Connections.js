import React, { useEffect, useState } from 'react'
import {Container, Grid,Box} from '@material-ui/core'

import ConnectionsOverview from './ConnectionsOverview.js'
import ConnectionRequest from './ConnectionRequest.js'
import { Redirect } from "react-router-dom"


function Connections(props){
    const [requests, setRequests] = useState([])

    const addConnection = (id) => {
        let temp = {...props.user}
        temp.id = props.user._id
        if(temp.connections.includes(id)){
            return
        }
        temp.connections = [...props.user.connections,id]
        console.log(temp)
        fetch('http://localhost:8080/api/users/user',{
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(temp),
          })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            props.setUser(res)
        })
    }
    useEffect(() => {
        fetch('http://localhost:8080/api/users')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setRequests(res)
        })
    },[])
    if(props.user === null){
        return <Redirect to="/login"/>
    }
    return (
    <Box margin={"80px"}>
        <Container>
            <Grid container>
                <Grid item xs={4}>
                    <ConnectionsOverview connections={props.user.connections}/>
                </Grid>
                <Grid item xs={7}>
                    {
                        requests.map(x => <ConnectionRequest key={x._id} addConnection ={addConnection} id = {x._id}/>)
                    }
                </Grid>

            </Grid>
        </Container>
    </Box>
    )
}

export default Connections