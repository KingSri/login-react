import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import form from '../components/form'

//Import components
export default (props) => (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component= { Home } />
        <Route path="/form" component= { form } />
    </Switch>
)