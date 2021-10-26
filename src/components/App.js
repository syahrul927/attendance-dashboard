import React, { Component } from 'react'
import { Route, Router, Switch } from "react-router-dom"
import history from "./history"
import Login from './page/Login'
import RouteAuth from './RouteAuth'

class App extends Component {

    render() {
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
}

export default App