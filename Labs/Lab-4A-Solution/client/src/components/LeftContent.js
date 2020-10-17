import React from 'react'
import Calendar from './Calendar.js'
import '../css/App.css'

function LeftContent(){
    return (
        <div className="left-content">
            <a href="#"><h1>craigslist</h1></a>
            <a href="#"><p>create a posting</p></a>
            <a href="#"><p>my account</p></a>
            
            <input value="search craigslist"/>
            <div>
                <Calendar/>
            </div>
            <a href="#"><p>craigslist app</p></a>
            <a href="#"><p>help, faq, abuse, legal</p></a>
            <a href="#"><p>avoid scams & fraud</p></a>
            <a href="#"><p>personal safety tips</p></a>
            <a href="#"><p>terms of use</p></a>
            <a href="#"><p>privacy policy</p></a>
            <a href="#"><p>system status</p></a>

            <br/>
            <a href="#"><p>about craigslist</p></a>
            <a href="#"><p>craigslist open source</p></a>
            <a href="#"><p>craigslist blog</p></a>
            <a href="#"><p>best-of-craigslist</p></a>
            <a href="#"><p>"craigslist joe"</p></a>
            <a href="#"><p>craig newmark philanthropies</p></a>
            <a href="#"><p>progressive directory"</p></a>

            <p>
                <a href="#">weather </a>
                <a href="#"> quake</a>
                <a href="#"> tide</a>
            </p>

            

        </div>
    )
}

export default LeftContent