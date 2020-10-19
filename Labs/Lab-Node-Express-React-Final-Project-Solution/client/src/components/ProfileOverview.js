import React, {useState} from 'react'
import {Box,Button, Card,CardContent,Typography, TextField} from '@material-ui/core'



function ProfileOverview(props){
    const [input, setInput] = useState({
        full_name:props.user.full_name,
        biography:props.user.biography,
        connections:props.user.connections.join(",")
    })
    const handleChange = (e) => {
        let temp = {...input}
        temp[e.target.name] = e.target.value
        setInput(temp)
    }
    const handleUpdate = () => {
        let temp = {...props.user}
        temp.id = props.user._id
        temp.full_name = input.full_name
        temp.biography = input.biography
        temp.connections = input.connections.split(',')
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
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#f0f4c3", height:"300px"}}>
                <CardContent>
                    <Typography variant="h3">
                        Profile Overview
                    </Typography>
                    <Typography>Full Name:</Typography>
                    <TextField name="full_name" onChange={handleChange} value={input.full_name}/>
                    <Typography>Biography:</Typography>
                    <TextField name="biography"onChange={handleChange} value={input.biography}/>
                    <Typography>Connections:</Typography>
                    <TextField name ="connections" style={{width:"700px"}}name ="connections" onChange={handleChange} value={input.connections}/>
                    <Box onClick={handleUpdate} margin="4px">
                        <Button variant="outlined">Update Profile</Button>
                    </Box>
                    
                </CardContent>
            </Card>
        </Box>
    )
}

export default ProfileOverview