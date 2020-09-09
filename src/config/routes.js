import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/Login'

//Import components
export default (props) => (
    <Switch>
        <Route exact path="/home" component={ Home } />
        <Route path="/" render= { (renderProps) =>{
            return <Login
                {...renderProps}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
                />
        } } />
    </Switch>
)