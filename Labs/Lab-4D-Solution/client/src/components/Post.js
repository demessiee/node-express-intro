import React from 'react'
import {Box, Button,Card,CardContent,CardActions,Divider,Typography} from '@material-ui/core'

import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#b3e5fc"}}>
                <CardContent>
                    <Typography variant="h4">
                        {props.content}
                    </Typography>
                </CardContent>
                <Divider/>

                <CardActions>
                    <Box marginTop="4px">

                        <Button startIcon={<LikeIcon/>}>Like</Button>
                        <Button startIcon={<CommentIcon/>}>Comment</Button>
                        <Button startIcon={<ShareIcon/>}>Share</Button>
                        <Button startIcon={<SendIcon/>}>Send</Button>                      
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Post