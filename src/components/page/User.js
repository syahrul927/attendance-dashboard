import React from 'react'
import { Link } from "react-router-dom"
import listUser from '../../api/user.json'
const User = () => {
    const renderRecord = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.telp}</td>
                <td><Link to="/"><i className="edit icon"></i></Link> <Link to="/"><i className="trash icon"></i></Link></td>
            </tr>
        )
    }
    return (
        <div>
            <h1 className="ui header">User</h1>
            <div className="ui section divider"></div>
            <div className="ui grid">
                <div className="six wide column">
                    <h2>Daftar User</h2>
                </div>
                <div className="right floated three wide column">
                    <Link to="/user/add" className="ui primary button right floated">Tambah Baru</Link>
                </div>
            </div>
            <div className="ui grid">
                <div className="wide column">
                    <table className="ui celled table" style={{ padding: '0px' }}>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Nama
                                </th>
                                <th>
                                    No Telp
                                </th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser.map(e => renderRecord(e))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default User
