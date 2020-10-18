import React from 'react'
import {Box, Button,Card,CardContent,CardActions,Divider,Typography} from '@material-ui/core'

import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Experience(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#c5cae9", height:"800px"}}>
                <CardContent>
                    <Typography variant="h3">
                        Experience
                    </Typography>
                    <Box margin="20px">
                        <Typography variant="h4">
                            ABC Solutions Company
                        </Typography>
                        <Typography>
                            Description of Job Responsibilities
                        </Typography>
                    </Box>
                    <Box margin="20px">
                        <Typography variant="h4">
                            Company 2
                        </Typography>
                        <Typography>
                            Description of Job Responsibilities
                        </Typography>
                    </Box>
                    <Box margin="20px">
                        <Typography variant="h4">
                            Company 3
                        </Typography>
                        <Typography>
                            Description of Job Responsibilities
                        </Typography>
                    </Box>
                    <Box margin="20px">
                        <Typography variant="h4">
                            Company 4
                        </Typography>
                        <Typography>
                            Description of Job Responsibilities
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Experience