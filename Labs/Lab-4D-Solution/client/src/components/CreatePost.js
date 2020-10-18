import React from 'react'
import {Box, Button, Card,CardContent, TextField, Typography, Divider, IconButton} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
import PollIcon from '@material-ui/icons/Poll';
import DescriptionIcon from '@material-ui/icons/Description';

function CreatePost(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#f9fbe7", height:"100px"}}>
                <CardContent>
                    <Box>
                        <Button startIcon={<EditIcon/>}>Create New Post</Button>
                    </Box>
                    <Divider/>
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