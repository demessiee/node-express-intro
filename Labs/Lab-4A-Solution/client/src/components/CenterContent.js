import React from 'react'
import '../css/App.css'
import Category from './Category.js'

function CenterContent(){
    return (
        <div className="center-content">
            <div className="boxed">
                SF bay area 
                <a href=""> sfc</a>
                <a href=""> sby</a>
                <a href=""> eby</a>
                <a href=""> pen</a>
                <a href=""> nby</a>
                <a href=""> scz</a>
            </div>
            <div className="boxed">
                Election Day is Tuesday, 11/3. <u>Find your polling place</u> and vote!
            </div>
            <div className="category-container">
                <Category title="community"/>
                <Category title="housing"/>
                <Category title="jobs"/>
                <Category title="services"/>
                <Category title="for sale"/>
                <Category title="discussion forums"/>
                <Category title="gigs"/>
                <Category title="resume"/>
            </div>
        </div>
    )
}

export default CenterContent