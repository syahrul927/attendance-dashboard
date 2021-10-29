import React, { useEffect, useState } from 'react'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import { Link } from "react-router-dom"
import { UserContext } from '../context/userContext'
const User = () => {
    const [listUser, setListUser] = useState([])
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
    const fetchUser = async () => {
        await httpHelper(API.userApi.getData, null, true).then(res => {
            if (res.status === 200) {
                setListUser(res.data.data)
            }
        })

    }
    useEffect(() => {
        fetchUser()
    }, [])
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
                            {listUser.length ? listUser.map(e => renderRecord(e)) : <tr><td colSpan="4" className="center">Data tidak ditemukan</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
