import React from 'react'
import { Route } from "react-router-dom"
import MenuSideBar from "./MenuSideBar"
import Home from './page/Home'
import User from './page/User'
import Absensi from './page/Absensi'

const RouteAuth = () => {
    

    const titleSidebar = {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '20px',
    }
    const titleContainer = {
        marginTop: '20px',
        marginBottom: '30px'
    }
    const containerMenu = {
        marginTop:'30px'
    }
    const containerSidebar = {
        paddingLeft:'50px'
    }
    const titleSubMenu = {
        color: '#828282',
        fontSize: '16px',
        fontWeight:'bold'
    }
    return(  
        <div className="ui grid" style={{ minHeight: '100vh' }}>
            <div className="ui three wide column" style={{ backgroundColor: '#E5E5E5', ...containerSidebar}}>
                <div className="ui column" style={titleContainer}>
                    <span style={titleSidebar}>Absensi</span>
                </div>
                <div className="ui column">
                    <span style={titleSubMenu}>Menu</span>
                </div>
                <div className="ui column" style={containerMenu}>
                    <MenuSideBar/>  
                </div>
            </div>
                <Route path="/" exact component={Home} />
                <Route path="/user" exact component={User} />
                <Route path="/absensi" exact component={Absensi} />
        </div>
    )
}
export default RouteAuth