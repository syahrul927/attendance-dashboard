import React, { useEffect } from 'react'
import { Route, Router, Switch } from "react-router-dom"
import history from "./history"
import Login from './page/auth/Login'
import RouteAuth from './RouteAuth'

const getTokenLocal = () => {
    return  localStorage.getItem('token')
}

const App = () => {
    useEffect(() => {
        const token = getTokenLocal() 
        console.log(`token ${token}`)
        if(!token){
            history.push('/login')
        } else{
            history.push('/')
        }
    }, [])
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