import React from 'react'
import {Container,Grid,Box} from '@material-ui/core'
import Post from './Post.js'
import Advertisement from './Advertisement.js'
import HomeOverview from './HomeOverview.js'
import HomeSubOverview from './HomeSubOverview.js'

import CreatePost from './CreatePost.js'


function Home(){
    return (
    <Box margin={"80px"}>
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <HomeOverview/>
                    <HomeSubOverview/>
                </Grid>
                <Grid item xs={6}>
                    <CreatePost/>
                    <Post content="Today I announce that after 18 long years with QWERTY Company, I have decided to move on to my next journey. I will never forget the memories that I had with my team. I look forward to being the new Vice President of Engineering at  GHI Company!"/>
                    <Post content="I lost my job. I have 5+ years of experience in data science. Please let me know of any available opportunities. Thanks."/>
                    <Post content="Happy to announce that I'm joining ABC company"/>
                    <Post content="I love my team. They are the best. I am happy to go to work everyday. Nothing makes me happier than solving problems for our customers."/>
                </Grid>
                <Grid item xs={3}>
                    <Advertisement content="Join XYZ company, great benefits"/>
                    <Advertisement content="Looking for UX consultants? Check here."/>
                    <Advertisement content="Begin your cloud transformation journey."/>
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}

export default Home