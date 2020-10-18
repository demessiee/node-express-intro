import React from 'react'
import {Box, Button, Card,CardContent, Grid, TextField, Typography, Divider, IconButton} from '@material-ui/core'

import ProfileIcon from '@material-ui/icons/AccountCircle';

function ConnectionRequest(props){
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

                    <Grid item xs={8}>
                        <Box padding="12px">         
                            {props.intro}
                        </Box>
                    </Grid>

                <Grid item xs={3}>
                    <Box>   
                       <Button style={{margin:"4px"}}>Ignore</Button>
                       <Button style={{margin:"4px"}} color ="primary" variant="contained">Accept</Button>
                    </Box>
                </Grid>
            </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ConnectionRequest