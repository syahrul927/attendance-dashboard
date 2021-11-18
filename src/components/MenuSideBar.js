import React from 'react'
import { Link } from "react-router-dom"

const MenuSideBar = () => {

    const contentList = {
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '17px',
        color: '#E8F0F2'
    }

    const iconSidebar = {
        color: '#E8F0F2'
    }
    const containerContent = {
        marginTop: '10px',
    }
    const clickLogout = async () => {
        console.log('clear token')
        await localStorage.clear()
    }
    return (
        <div className="ui list">
            <div className="item" style={containerContent}>
                <Link to="/" className="ui grid">
                    <div className="column">
                        <i className="home icon" style={iconSidebar}></i>
                    </div>
                    <div className="column">
                        <div className="content" style={contentList}>
                            Home
                        </div>
                    </div>
                </Link>
            </div>
            <div className="item" style={containerContent}>
                <Link to="/user" className="ui grid">
                    <div className="column">
                        <i className="user icon" style={iconSidebar}></i>
                    </div>
                    <div className="column">
                        <div className="content" style={contentList}>
                            User
                        </div>
                    </div>
                </Link>
            </div>
            <div className="item" style={containerContent}>
                <Link to="/absensi" className="ui grid">
                    <div className="column">
                        <i className="file icon" style={iconSidebar}></i>
                    </div>
                    <div className="column">
                        <div className="content" style={contentList}>
                            Absensi
                        </div>
                    </div>
                </Link>
            </div>
            <div className="item" style={containerContent}>
                <Link to="/testing" className="ui grid">
                    <div className="column">
                        <i className="software icon" style={iconSidebar}></i>
                    </div>
                    <div className="column">
                        <div className="content" style={contentList}>
                            Testing
                        </div>
                    </div>
                </Link>
            </div>
            <div className="item" style={containerContent}>
                <Link to="/login" className="ui grid" onClick={() => clickLogout()}>
                    <div className="column">
                        <i className="sign-out icon" style={iconSidebar}></i>
                    </div>
                    <div className="column">
                        <div className="content" style={contentList}>
                            Logout
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuSideBar