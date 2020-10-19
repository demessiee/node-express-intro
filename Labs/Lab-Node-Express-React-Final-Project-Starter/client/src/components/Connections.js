import React from 'react'
import {Container,Grid,Box} from '@material-ui/core'

import ConnectionsOverview from './ConnectionsOverview.js'
import ConnectionRequest from './ConnectionRequest.js'


function Connections(){
    return (
    <Box margin={"80px"}>
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <ConnectionsOverview/>
                </Grid>
                <Grid item xs={9}>
                    <ConnectionRequest intro="Please accept my connection request"/>
                    <ConnectionRequest intro="Hey! We met at XYZ Conference last year! Hoping we can connect and share industry best practices."/>
                    <ConnectionRequest intro="Wow, its been 10 years since we last met in college. How have you been?"/>

                </Grid>

            </Grid>
        </Container>
    </Box>
    )
}

export default Connections