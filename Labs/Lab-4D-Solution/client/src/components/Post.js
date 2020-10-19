import React from 'react'
import {Box, Button,Card,CardContent,CardActions,Grid, Divider,Typography, IconButton} from '@material-ui/core'

import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import ProfileIcon from '@material-ui/icons/AccountCircle';

function Post(props){
    return (
        <Box margin="20px">
            <Card variant="outlined" style={{backgroundColor:"#b3e5fc"}}>
                <CardContent>
                <Grid container>
                    <Grid item xs={1}>
                            <IconButton>
                                <ProfileIcon/>
                            </IconButton>
                    </Grid>

                    <Grid item xs={8}>
                        <Box padding="12px">         
                            Author
                        </Box>
                    </Grid>
                </Grid>
                    
                    
                </CardContent>
                <Divider/>
                <CardContent>
                    <Typography >
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