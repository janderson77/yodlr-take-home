import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return(
        <div className="col-6 offset-3 d-flex flex-column justify-content-center align-items-center">
            <div>
                <h1 className="display-1">YODLR</h1>
            </div>
            <div className="align-items-center">
                <div>
                <NavLink to="/register" className="display-3">Register</NavLink>
                </div>
                <div>
                <NavLink to="/admin" className="display-3">Admin</NavLink>
                </div>
            </div>
            
            
            
        </div>
        
    )
}

export default Home