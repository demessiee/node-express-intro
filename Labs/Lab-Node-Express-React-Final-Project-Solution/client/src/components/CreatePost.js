import React,{useState} from 'react'
import {Box, Button, Card,CardContent,Divider, TextField} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
import PollIcon from '@material-ui/icons/Poll';
import DescriptionIcon from '@material-ui/icons/Description';

function CreatePost(props){
    const [input,setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        props.addPost(input,props.user._id)
    }
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#f9fbe7"}}>
                <CardContent>
                    <Box display="flex">
                        <Button onClick={handleClick} startIcon={<EditIcon/>}>Create New Post</Button>
                        <TextField value = {input} onChange={handleChange }style={{width:"340px", margin:"4px"}} variant="outlined"/>
                    </Box>
                
                </CardContent>
                <Divider/>
                <CardContent>
                    <Box marginTop="4px">
                            <Button startIcon={<AddAPhotoIcon/>}>Add Photo</Button>
                            <Button startIcon={<VideocamIcon/>}>Add Video</Button>
                            <Button startIcon={<PollIcon/>}>Create Poll</Button>
                            <Button startIcon={<DescriptionIcon/>}>Write Article</Button>                      
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CreatePost