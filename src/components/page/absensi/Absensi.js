import React from 'react'
import {Link} from 'react-router-dom'
import listAbsen from '../../../api/absensi.json'
const Absensi = () => {
    const renderRecord = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.dateTm}</td>
                <td><Link to="/"><i className="edit icon"></i></Link> <Link to="/"><i className="trash icon"></i></Link></td>
            </tr>
        )
    }
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
                            {listAbsen.map(e => renderRecord(e))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Absensi
