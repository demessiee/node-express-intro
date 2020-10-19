import React from 'react'
import {Box,Card,CardContent,Typography} from '@material-ui/core'



function ProfileOverview(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#7986cb", height:"300px"}}>
                <CardContent>
                    <Typography variant="h3">
                        Profile Overview
                    </Typography>
                    <Typography>
                        Profile Description
                    </Typography>
                    
                </CardContent>
            </Card>
        </Box>
    )
}

export default ProfileOverview