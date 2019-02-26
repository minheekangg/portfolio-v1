import React from 'react'

import capsule2 from '../images/projects/capsule2.png'
import korean101 from '../images/projects/korean101.png'
import capsule1 from '../images/projects/capsule1.png'

export default class Work extends React.Component{
    state = {
        projects: [{
            name: "capsule wardrobe two.",
            stack: `React, Redux, ruby on rails, jwt auth, thunk/axios, google maps api, cloudinary, darksky(weather), materialize/bootstrap/custom css`,
            image: capsule2
        },{
            name: "korean 101.",
            stack: `React, javascript, chart.js, semantic ui, ruby`,
            image: korean101
        },{
            name: "capsule wardrobe one.",
            stack: `Single-Page App, Javascript, JSON, Semantic UI, Ruby`,
            image: capsule1
        }],
        selected: ''
    }

    selectProject = (event)=>{
        // debugger
        console.log(event.target.parentElement)
       return event.target.parentElement.id === "single-project" ? this.setState({selected: event.target.parentElement.dataset.id}, ()=>{
                console.log(this.state.selected)
            })
           : this.setState({ selected: '' }, () => {
               console.log(this.state.selected)
           })
    }

    renderProjects = () =>{
        return this.state.projects.map(e=>{
            return <div id="single-project" onClick={()=>this.setState({selected: e.name})} key={e.name} data-id={e.name}>
            <img src={e.image} alt={e.name}/>
                <span>{e.name}</span>
                <div id="stack">{e.stack}</div>
            </div>
        })
    }


    render() {
        return (
            <div id="work-page">
                <h1>Projects</h1>
                <div id="project-container" onClick={e=>this.selectProject(e)}>
                    {this.renderProjects()}
                </div>
            </div>
        )
    }

}