import React from 'react'
import profile from '../images/paris.jpg'


export default class About extends React.Component{

    render(){
        return(
            <div id="about-page">this is about page
                 <img src={profile} id="my-pic" alt="my_pic"/>
                 <div id="my-description">
                     Hi there! I am a fashion girl turned full stack web developer. <br/> <br/>  When I discovered how destructive the fashion industry had become with fast fashion, I sought out to find a home in an industry that builds rather than destroys. After going through Immersive Software Engineering Bootcamp, I am happy to say that I have now found the perfect career path for puzzle-loving, data-junkie, passionate, me.
                 </div >
                
            </div>
        )
    }
}