import React from 'react'
import {Box, Card,CardContent,} from '@material-ui/core'

function HomeOverview(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#26a69a", height:"400px"}}>
                <CardContent>
                    Feed Overview
                </CardContent>
            </Card>
        </Box>
    )
}

export default HomeOverview