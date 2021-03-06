//App.js
import React,{useState} from 'react'
import {Tabs,Tab,AppBar} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"


function App(){
  const [activeTab,setActiveTab] = useState(0)

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

            </Tabs>
        </AppBar>
        </Router>
    )
}

export default App