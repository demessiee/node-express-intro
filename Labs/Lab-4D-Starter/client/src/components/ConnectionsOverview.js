import React from 'react'
import {Box, Card,CardContent} from '@material-ui/core'

function FeedOverview(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#e1bee7", height:"700px"}}>
                <CardContent>
                    Connections Overview
                </CardContent>
            </Card>
        </Box>
    )
}

export default FeedOverview