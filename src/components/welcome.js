import React from 'react';

class Welcome extends React.Component{
    state = {
        skills: ["Javascript", "Ruby on Rails", "React", "Redux", "HTML/CSS"]
    }

    renderSkills = () =>{
        return this.state.skills.map(e=> {
            return <div id="single-skill-scroll">
                {e}
            </div>
        })
    }

    render() {
        return <div>welcome to my home page
               <div id="skill-scroll">{this.renderSkills()}</div>
            </div>
    }
}

export default Welcome