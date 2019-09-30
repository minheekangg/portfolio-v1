import React from 'react';

class Welcome extends React.Component{

    render() { 
        return (
            <div className="welcome">
                Full Stack Web Developer 
                <div className="skill-scroll">
                    <div className="single-skill-scroll">+Javascript</div>
                    <div className="single-skill-scroll">+Ruby on Rails</div>
                    <div className="single-skill-scroll">+React</div>
                    <div className="single-skill-scroll">+Redux</div>
                    <div className="single-skill-scroll">+HTML/CSS</div>
                    <div className="single-skill-scroll">+NodeJS</div>
                    <div className="single-skill-scroll">+MongoDB</div>
                    <div className="single-skill-scroll">+Github</div>
                </div>
            </div>
        ) 
    }
}

export default Welcome