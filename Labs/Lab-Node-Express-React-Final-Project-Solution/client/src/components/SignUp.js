import React, {useState} from 'react'
import {Box, Button, Container, Typography, TextField} from '@material-ui/core'
function SignUp(props){
    const [input,setInput] = useState({
        id:"",
        password:""
    })
    const handleChange = (e) => {
        let temp = {...input}
        temp[e.target.name] = e.target.value
        setInput(temp)
    }
    const handleSubmit = () => {
        console.log(input.id,input.password)
        fetch("http://localhost:8080/api/users/user",{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
         }).then(res => res.json())
         .then( res => {
             console.log(res)
             if(res.validUser === true){
                props.history.push('/home')
                props.setUser(input.id)
             }else{
                alert("Invalid log in credentials")
             }
         })
    }
    return (
        <Container>
            <Box margin="80px">
                <Box margin="4px">
                    <Typography variant="h5">Id (Email)</Typography>
                    <TextField name="id" value={input.id} onChange={handleChange} variant="outlined"/>
                </Box>
                <Box margin="4px">
                    <Typography variant="h5">Password</Typography>
                    <TextField name="password" value={input.password} onChange={handleChange} variant="outlined"/>

                </Box>
                <Box margin="4px">
                    <Button onClick={handleSubmit} size="large" variant="outlined">
                        Sign Up
                    </Button>
                </Box>
                
            </Box>
        </Container>
    )
}

export default SignUp