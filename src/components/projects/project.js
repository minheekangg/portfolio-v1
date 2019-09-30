import React from 'react'

export default class Project extends React.Component{
   
    render(){
        const { name, video, stack, description} = this.props;
        return (
            <div className="single-selected-project" key={name}> 
                <iframe className="video" width="100%" height="100%" src={video} frameBorder="0" title={name} allowFullScreen></iframe> <button>X</button>
                <div className="single-description">
                    <div style={{fontWeight: "bold"}}>
                        {name} 
                    </div>
                    <div style={{ fontStyle: "italic"}}>{stack.toUpperCase()}</div> 
                    
                    <div className="single-description-text">DESCRIPTION: </div>
                     {description.map(e=>{
                        return <span className="single-description-text" key={e}>{e} </span>
                    })}
                    
                </div>
            </div>
        )
    }
}