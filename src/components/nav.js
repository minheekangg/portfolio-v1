import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
    state = {active: 'welcome'}
    render() {
        return (
            <div className="navbar">
                <span className="title">mhp</span>
                <div>
                    <Link to="/welcome" >welcome</Link> 
                    <Link to="/work" >work</Link>
                    <Link to="/contact" >contact</Link>
                    <Link to="/about" >about</Link>
                </div>
            </div>
        )
    }
}

export default NavBar