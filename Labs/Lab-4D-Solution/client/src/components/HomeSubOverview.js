import React from 'react'
import {Box, Card,CardContent,} from '@material-ui/core'

function HomeSubOverview(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#b2dfdb", height:"200px"}}>
                <CardContent>
                    Feed Sub Overview
                </CardContent>
            </Card>
        </Box>
    )
}

export default HomeSubOverview