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
        color:'#E8F0F2'
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
    return(  
        <div className="ui grid" style={{ minHeight: '100vh' }}>
            <div className="ui three wide column" style={{ backgroundColor: '#053742', ...containerSidebar}}>
                <div className="ui column" style={titleContainer}>
                    <span style={titleSidebar}>Absensi</span>
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