import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import Loading from '../part/loading'
import ModalImage from './ModalImage'
const Absensi = () => {
    
    const baseURL = '//159.223.56.146:3000'
    const [listAbsensi, setListAbsensi] = useState([])
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [urlImage, setUrlImage] = useState('')
    const renderRecord = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{idx}</td>
                <td>{item.userId}</td>
                <td>{item.nama}</td>
                <td>{item.suhu}</td>
                <td>{item.createdDate}</td>
                <td><i className="image icon" onClick={() => showModalImage(item.path)}></i> </td>
            </tr>
        )
    }
    const showModalImage = (url = '') => {
        setModal(true)
        url = url.replace('images/', '/images/absensi/')
        setUrlImage(baseURL+url)
    }
    const fetchAbsensi = async () => {
        setLoading(true)
        await httpHelper(API.absensiApi.getData, null).then(res => {
            if(res.status === 200){
                setListAbsensi(res.data.obj)
            }
        })
        setLoading(false)
    }
    useEffect(() => {
        fetchAbsensi()
    }, [])
    return (
        <div>
            {loading && <Loading />}
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
            {modal && <ModalImage setModal={setModal} url={urlImage} />}
        </div>
    )
}
export default Absensi
