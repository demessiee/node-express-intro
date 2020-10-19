import React from 'react'
import {Box, Button, Card,CardContent, Grid,  IconButton} from '@material-ui/core'

import ProfileIcon from '@material-ui/icons/AccountCircle';

function ConnectionRequest(props){
    const handleClick = () => {
        props.addConnection(props.id)
    }
    return (
        <Box margin="20px">
        
            <Card variant="outlined" style={{backgroundColor:"##ede7f6", height:"100px"}}>
                <CardContent>


                <Grid container>
                    <Grid item xs={1}>
                            <IconButton>
                                <ProfileIcon/>
                            </IconButton>
                    </Grid>

                    <Grid item xs={9}>
                        <Box padding="12px">         
                           {`Connection request from ${props.id}`}
                        </Box>
                    </Grid>

                <Grid item xs={2}>
                    <Box>   
                       <Button onClick={handleClick} style={{margin:"4px"}} color ="primary" variant="contained">Accept</Button>
                    </Box>
                </Grid>
            </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ConnectionRequest