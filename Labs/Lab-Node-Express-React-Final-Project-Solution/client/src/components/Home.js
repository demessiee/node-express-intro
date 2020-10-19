import React, {useState, useEffect} from 'react'
import {Container,Grid,Box} from '@material-ui/core'
import Post from './Post.js'
import Advertisement from './Advertisement.js'
import HomeOverview from './HomeOverview.js'
import HomeSubOverview from './HomeSubOverview.js'
import { Redirect } from "react-router-dom"

import CreatePost from './CreatePost.js'


function Home(props){
    const [posts,setPosts] = useState([])

    const addPost = (content,author) => {
        let temp = {
            user_id:author,
            content:content
        }
        fetch('http://localhost:8080/api/posts/post',{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(temp),
          })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            getPosts()
        })
    }
    const getPosts = () => {
        fetch("http://localhost:8080/api/posts")
        .then( res => res.json())
        .then( res => {
            console.log(res)
            setPosts(res)
        })
    }
    useEffect( () => {
        getPosts()
    },[])
    if(props.user === null){
        return <Redirect to="/login"/>
    }
    return (
    <Box margin={"80px"}>
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <HomeOverview/>
                    <HomeSubOverview/>
                </Grid>
                <Grid item xs={6}>
                    <CreatePost user={props.user} addPost={addPost}/>
                    {
                        posts.map(x => <Post {...x} />
                        )
                    }

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