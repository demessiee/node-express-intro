//App.js
import React,{useState} from 'react'
import {Tabs,Tab,AppBar, Button} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import Home from './components/Home.js'
import Connections from './components/Connections.js'
import Profile from './components/Profile.js'
import SignUp from './components/SignUp.js'


function App(){
  const [activeTab,setActiveTab] = useState(0)
  const [user,setUser] = useState(null)

    return(
      <Router>
        <AppBar color="primary">
            <Tabs value={activeTab}>
            <Link to="/home">
              <Tab style={{color:"white"}} onClick={()=> setActiveTab(0)} label="Home" value = {0}/>
            </Link>
            <Link to="/connections">
              <Tab style={{color:"white"}} onClick={()=> setActiveTab(1)} label="Connections" value = {1}/>
            </Link>
            <Link to="/profile">
              <Tab style={{color:"white"}} onClick={()=> setActiveTab(2)} label="My Profile" value = {2}/>
            </Link>
            <Link to="/signup">
              <Tab style={{color:"white"}} onClick={()=> setActiveTab(3)} label="Sign Up" value = {3}/>
            </Link>
            <Link to="/login">
              <Tab style={{color:"white"}} onClick={()=> setActiveTab(4)} label="Log In" value = {4}/>
            </Link>
            {user ? <Button style={{color:"white"}}>Log Out</Button> : null}
            {user ? `Welcome ${user}` : null}
            </Tabs>
        </AppBar>
        <Switch>
          <Route path="/home" render={(props)=> <Home {...props} user={user}/>}/>
          <Route path="/connections" render={(props)=> <Connections {...props} user={user}/>}/>
          <Route path="/profile" render={(props)=> <Profile {...props} user={user}/>}/>
          <Route path="/signup" render={(props)=> <SignUp {...props} setUser={props.setUser} user={user}/>}/>

        </Switch>
        </Router>
    )
}

export default App