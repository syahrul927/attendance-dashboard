import React, { createContext, useState } from 'react'
import { Route } from "react-router-dom"
import MenuSideBar from "./MenuSideBar"
import Home from './page/home/Home'
import User from './page/user/User'
import Absensi from './page/absensi/Absensi'
import UserForm from './page/user/UserForm'
import useContext, { UserContext } from './page/context/userContext'

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
    
    const userContextUpdate = (obj = {}) => {
        setListUser([...listUser, obj])
    }
    const [listUser, setListUser] = useState([])
    const userContextValue = {
        users: [...listUser],
        sync:userContextUpdate
    }
    return(  
        <div className="ui container fluid">
            <div className="ui grid" style={{ minHeight: '100vh', marginBottom:'0px', marginTop:'0px' }}>
                <div className="ui three wide column" style={{ backgroundColor: '#053742', ...containerSidebar}}>
                    <div className="ui column" style={titleContainer}>
                        <span style={titleSidebar}>Absensi</span>
                    </div>
                    <div className="ui column" style={containerMenu}>
                        <MenuSideBar/>  
                    </div>
                </div>
                <div className="ui thirteen wide column">
                    <div className="ui container" style={{backgroundColor:'#fff', marginTop:'5em', padding:'5em', borderRadius:'1em'}}>
                        <UserContext.Provider value={listUser}>
                            <Route path="/" exact component={Home} />
                            <Route path="/user" exact component={User} />
                            <Route path="/user/add" exact component={UserForm}/>
                            <Route path="/absensi" exact component={Absensi} />
                        </UserContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RouteAuth