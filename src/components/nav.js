import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

    render() {
        return (
            <div id="navbar">
                <span id="title">minhee kang</span>
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