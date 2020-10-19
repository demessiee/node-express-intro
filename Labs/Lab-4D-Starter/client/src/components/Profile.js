import React from 'react'
import {Container,Grid,Box} from '@material-ui/core'
import Advertisement from './Advertisement.js'
import Experience from './Experience.js'
import ProfileOverview from './ProfileOverview.js'



function Profile(){
    return (
    <Box margin={"80px"}>
        <Container>
            <Grid container>

                <Grid item xs={8}>
                    <ProfileOverview/>
                   <Experience/>


                </Grid>
                <Grid item xs={4}>
                    <Advertisement content="Join XYZ company, great benefits"/>
                    <Advertisement content="Looking for UX consultants? Check here."/>
                    <Advertisement content="Begin your cloud transformation journey."/>
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}

export default Profile