import React from 'react'
import {Box, Card,CardContent,Typography} from '@material-ui/core'

function Advertisement(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#f8bbd0", height:"400px"}}>
                <CardContent>
                    <Box>
                        <Typography>    
                            Advertisement
                        </Typography>
                    </Box>
                    <Box margin="20px">
                        <Typography>
                            {props.content}
                        </Typography>
                    </Box>
                   

                </CardContent>
            </Card>
        </Box>
    )
}

export default Advertisement