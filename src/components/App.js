import React, { Component, useEffect } from 'react'
import { Route, Router, Switch } from "react-router-dom"
import history from "./history"
import Login from './page/auth/Login'
import RouteAuth from './RouteAuth'

const App = () => {
    useEffect(async () => {
        const token = await localStorage.getItem('token')
        if(!token){
            history.push('/login')
        } else{
            history.push('/')
        }
    })
    return (
        <Router history={history}>
            <div className="ui container fluid" >
                <Switch>
                    <Route path="/login" component={Login}/>
                    <RouteAuth />
                </Switch>
            </div>
        </Router>
    )
}

export default App