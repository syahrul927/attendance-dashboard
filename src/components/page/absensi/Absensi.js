import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
const Absensi = () => {
    const [listAbsensi, setListAbsensi] = useState([])
    const renderRecord = (item, idx) => {
        return (
            <tr key={item.userId}>
                <td>{idx}</td>
                <td>{item.userId}</td>
                <td>{item.nama}</td>
                <td>{item.suhu}</td>
                <td>{item.createdDate}</td>
                <td><Link to="/"><i className="image icon"></i></Link> </td>
            </tr>
        )
    }
    const fetchAbsensi = async () => {
        await httpHelper(API.absensiApi.getData, null).then(res => {
            if(res.status === 200){
                setListAbsensi(res.data.obj)
            }
        })
    }
    useEffect(() => {
        fetchAbsensi()
    }, [])
    return (
        <div>
            <h1 className="ui header">Absensi</h1>
            <div className="ui section divider"></div>
            <div className="ui grid">
                <div className="six wide column">
                    <h2>Daftar Absensi</h2>
                </div>
            </div>
            <div className="ui grid">
                <div className="wide column">
                    <table className="ui celled table" style={{ padding: '0px' }}>
                        <thead>
                            <tr>
                                <th>
                                    No
                                </th>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Nama
                                </th>
                                <th>
                                    Suhu
                                </th>
                                <th>
                                    Waktu Absen
                                </th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listAbsensi.map((e, idx) => renderRecord(e, idx+1))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Absensi
