import React, { useEffect } from 'react'
import { Route, Router, Switch } from "react-router-dom"
import history from "./history"
import Login from './page/auth/Login'
import RouteAuth from './RouteAuth'

const getTokenLocal = async () => {
    return await localStorage.getItem('token')
}

const App = () => {
    useEffect(() => {
        const token = getTokenLocal() 
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