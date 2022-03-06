import React, { useEffect, useState } from 'react'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import { Link } from "react-router-dom"
import Loading from '../part/loading'
import ModalDelete from './ModalDelete'
import Table from '../part/table'
import UserView from './UserView'
const User = () => {

    const [listUser, setListUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState({ id: '', isOpen: false })
    const [modal, setModal] = useState(false);
    const [urlImage, setUrlImage] = useState([]);
    const [nameView, setNameView] = useState("");
    const renderRecord = (item) => {
        // console.log(JSON.stringify(item))
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.telp}</td>
                <td>
                    <i className="image icon" onClick={() => showUserView(item.images, item.nama)}></i>
                    <i className="trash icon" onClick={() => deleteUser(item.id)}></i>
                </td>
            </tr>
        )
    }
    const renderTools = (item) => {
        return (<div>
            <i className="image icon" onClick={() => showUserView(item.images, item.nama)}></i>
            <i className="trash icon" onClick={() => deleteUser(item.id)}></i>
        </div>)
    }
    const showUserView = (url = [], nama = '') => {
        setModal(true)
        setUrlImage(url)
        setNameView(nama)
    }
    const generateRecord = () => {
        listUser.forEach(item => {
            item.tools = { id: item.id, images: item.images, nama: item.nama }
        })
        const res = {
            columns: [
                {
                    name: "id",
                    label: "Id",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "nama",
                    label: "Nama",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "telp",
                    label: "Telp",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "tools",
                    label: "Tools",
                    options: {
                        filter: true,
                        sort: false,
                        customBodyRender: (value, tableMeta, updateValue) => (
                            <div>
                                <i className="image icon" onClick={() => showUserView(value.images, value.nama)}></i>
                                <i className="trash icon" onClick={() => deleteUser(value.id)}></i>
                            </div>
                        )
                    }
                },
            ],
            rows: [...listUser]
        }
        return res
    }
    const fetchUser = async () => {
        setLoading(true)
        await httpHelper(API.userApi.getData, null).then(res => {
            if (res.status === 200) {
                setListUser(res.data.obj)
            }
        })
        setLoading(false)

    }
    const deleteUser = (id) => {
        if (id) {
            setDeleteModal({ id, isOpen: true })
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            {loading && <Loading />}
            <h1 className="ui header">User</h1>
            <div className="ui section divider"></div>
            <div className="ui grid">
                <div className="right floated three wide column">
                    <Link to="/user/add" className="ui primary button right floated">Tambah Baru</Link>
                </div>
            </div>
            <div className="ui grid">
                <div className="wide column">
                    {/* <table className="ui celled table" style={{ padding: '0px' }}>
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
                    </table> */}
                    <Table data={generateRecord()} title="Daftar User" />
                </div>
            </div>
            {deleteModal.isOpen && <ModalDelete modal={deleteModal} setModal={setDeleteModal} listUser={listUser} />}
            {modal && <UserView setModal={setModal} url={urlImage} nama={nameView} />}
        </div>
    )
}

export default User
