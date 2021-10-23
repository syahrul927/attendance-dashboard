import React from 'react'
import { Link } from "react-router-dom"

const MenuSideBar = () => {
    
    const contentList = {
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '17px',
        color: '#828282'
    }

    const iconSidebar = {
        color: '#BDBDBD'
    }
    const containerContent = {
        marginTop:'10px',
    }
    return(
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
                <Link to="/user"  className="ui grid">
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
                <Link to="/absensi"  className="ui grid">
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
        </div>
    )
}

export default MenuSideBar