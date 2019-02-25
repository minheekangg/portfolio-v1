import React from 'react';

class Welcome extends React.Component{
    state = {
        skills: ["Javascript", "Ruby on Rails", "React", "Redux", "HTML/CSS", "Swift", "Github", "Sinatra"],
        render: false 
    }

    componentDidMount(){
        setTimeout(()=>{
            document.querySelector('#welcome').innerHTML = `Full Stack Web Developer <div id="skill-scroll"></div>`;
        }, 500)
        this.renderSkills()
    }
    
    renderSkills = () =>{
        this.state.skills.map(e=> {
            return setTimeout(()=>{
                return document.querySelector('#skill-scroll').innerHTML += `<div id="single-skill-scroll">
                + ${e}
            </div>`
            }, 1500)

        })
    }

    render() { 
        return <div id="welcome">
            </div> 
    }
}

export default Welcome