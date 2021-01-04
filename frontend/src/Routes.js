import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Admin from './Admin'

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/register" exact>
                <Register />
            </Route>
            <Route path="/admin" exact>
                <Admin />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes