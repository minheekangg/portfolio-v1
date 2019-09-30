import React from 'react'

import capsule2 from '../../images/projects/capsule2.png'
import capsule1 from '../../images/projects/capsule1.png'
import korean101 from '../../images/projects/korean101.png'
import Project from './project';

export default class Projects extends React.Component{
    state = {
        projects: [{
            name: "capsule wardrobe two.",
            stack: `React, Redux, ruby on rails, jwt auth, thunk/axios, google maps api, cloudinary, darksky, materialize/bootstrap/custom css`,
            video: "https://www.youtube.com/embed/VDxH5Hwu8wc",
            image: capsule2,
            description: [`Going from maximalist shopaholic to humbly practicing minimalism, I have been trying to adopt capsule wardrobing (definition below). This app uses a similar concept as capsule wardrobing - encouraging the user to value the items they already have in his/her closet and shaping the user's behavior to sell or donate the unwanted item.`, `The full description of walk-through, included in the video.`, `--From Wikipedia: "Capsule wardrobe, coined by Susie Faux, the owner of a London boutique called "Wardrobe" in the 1970s.. .is a collection of a few essential items of clothing that don't go out of fashion, such as skirts, trousers, and coats, which can then be augmented with seasonal pieces."`]
        },{
            name: "korean 101.",
            stack: `React, javascript, chart.js, semantic ui, ruby`,
            video: "https://www.youtube.com/embed/qYbIbeGxrzU",
            image: korean101,
            description: ["This React app allows the user to learn all 14 consonants in Korean alphabet and words that start with the letter. The user is given the consonant on the left (in order) and is able to play the sound of the letter. The options/words are provided on the right, with the sound of the words.", "The video shows an example of a user getting the words incorrect in the first play, and then completing the application - which leads the user to the end page where the progress of the user is shown on a line graph, based on the tries. I teach Korean to pre-k students on the weekends and thought about making an app for them!"]
        },{
            name: "capsule wardrobe one.",
            stack: `Single-Page App, Javascript, JSON, Semantic UI, Ruby`,
            video: "https://www.youtube.com/embed/i1OPl7xsD2w",
            image: capsule1,
            description: [`This app encourages capsule wardrobing (see Capsule Wardrobe 2 for definition). This single-page app shows the user how many times an item in his/her closet really gets worn and sends a reminder that many different outfits can come from little.`, `Video description: top section shows all the outfits made with items below. The user is able to select an item from below to create "outfit of the day." Once "append" button is clicked, the outfit collection gets rendered to the back of the carousel.`, `Not in the video: delete + add item function.`]
        }],
        selected: ''
    }

    selectProject = (event) =>{ 
       return event.target.parentElement.className === "single-project" 
            ? this.setState({selected: event.target.parentElement.dataset.id})
            : this.setState({ selected: '' })
    }

    renderSingleProject = () =>{
        let foundProject = this.state.projects.find(e=> e.name === this.state.selected);

        return <Project name={foundProject.name} video={foundProject.video} stack={foundProject.stack} description={foundProject.description}/>
    }


    render() {
        return (
            <div className="work-page">
                { this.state.selected !== '' 
                    ? this.renderSingleProject()
                    : <div>
                        <h1>Projects</h1>
                            <div className="project-container" onClick={e => this.selectProject(e)}> {this.state.projects.map(e => {
                                return (
                                    <div className="single-project" onClick={() => this.setState({ selected: e.name })} key={e.name} data-id={e.name}>
                                        <img src={e.image} alt={e.name} />
                                        <span>{e.name}</span>
                                        <div className="stack">{e.stack}</div>
                                    </div>
                                )
                                })}
                        </div>
                    </div> }
            </div>
        )
    }

}