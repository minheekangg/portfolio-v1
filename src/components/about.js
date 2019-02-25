import React from 'react'
import profile from '../images/paris.jpg'


export default class About extends React.Component{
    state = {
        experience: [{ name: "Assistant Buyer", place: "SAKS FIFTH AVENUE OFF FIFTH + GILT (HBC)", time: "Aug 2017 - Oct 2018" }, { name: "Assistant Planner", place: "SAKS FIFTH AVENUE OFF FIFTH + GILT (HBC)", time: "Jul 2016 – Aug 2017" }, { name: "Merchandising Assistant", place: "SAKS FIFTH AVENUE OFF FIFTH + GILT (HBC)", time: "Mar 2015 – Jul 2016" }, { name: "Research Assistant", place: "HAVER ANALYTICS", time: "June 2014 – March 2015" } ],
        education: [{ name: "Flatiron School", location: "NY, NY", degree: "Full Stack Web Development", time: "JAN 2018" }, { name: "Hunter College CUNY", location: "NY, NY", degree: "Bachelor of Arts in Economics, Media Studies Minor", time: "JAN 2015" }]
}

    displayExperience =() =>{
        return this.state.experience.map(e=>{
            return <div id="experience-extended">  + {e.name}
                <span id="show">
                    {e.place} <br/> {e.time}
                </span>
            </div>
        })
    }
    displayEducation =() =>{
        return this.state.education.map(e=>{
            return <div id="experience-extended">  + {e.name}
                <span id="show">
                    {e.degree} <br /> {e.location}<br/>{e.time}
                </span>
            </div>
        })
    }


    render(){
        return(
            <div id="about-page">
                 <img src={profile} id="my-pic" alt="my_pic"/>
                <div id="my-description">
                    <span id="bio">
                     Hi there! <br/>I am a fashion girl turned full stack web developer
                    </span>
                    <span id="bio-more">
                          When I discovered how destructive the fashion industry had become with fast fashion, I sought out to find a home in an industry that builds rather than destroys. After going through Immersive Software Engineering Bootcamp, I am happy to say that I have now found the perfect career path for puzzle-loving, data-junkie, passionate, me.
                    </span>
                    <br/>
                 <div id="experience" >
                    Experience
                 </div>
                        {this.displayExperience()}
                 <div id="experience">
                    Education
                    </div>
                    {this.displayEducation()}
                 </div >
                
            </div>
        )
    }
}