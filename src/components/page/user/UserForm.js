import React, { useEffect, useState } from 'react'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import Modal from './Modal'
import history from '../../history'
import { UserContext } from '../context/userContext'

const UserForm = () => {
    const [form, setForm] = useState({ nama: '', telp: '' })
    const [modal, setModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const {sync, listUser} = UserContext.Consumer 



    const onSubmit = async () => {
        await httpHelper(API.userApi.addNew, form, true).then(res => {

            if (200 === res.status && res.data.success) {
                const obj = {
                    id: res.data.id,
                    nama: res.data.nama,
                    telp: res.data.telp
                }
            } else {
                console.log(`error ${res.data}`)
            }
        })
        history.push('/user')
    }
    const takePhoto = async () => {
        setModal(true)
    }

    const validationForm = () => {
        if (!form.nama || !form.telp || !photo) {
            return true
        }
        return false
    }
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <h1 className="ui header">User Form</h1>
            <div className="ui section divider"></div>
            <div className="ui grid">
                <div className="ui form column">
                    <div className="field">
                        <label htmlFor="Nama">Nama</label>
                        <input type="text" name="nama" value={form.nama} onChange={onChange} placeholder="Nama Lengkap" />
                    </div>
                    <div className="field">
                        <label htmlFor="telp">Nomor Telp</label>
                        <input type="number" value={form.telp} onChange={onChange} name="telp" placeholder="Nomor Telp" />
                    </div>
                    <div className="field">
                        <label htmlFor="">Upload Foto</label>
                        <div className="ui column">
                            {photo && <img alt="Images" src={photo} />}
                        </div>
                        <div className="ui column">
                            <button className="ui green button" onClick={takePhoto}>Ambil Gambar</button>
                        </div>
                    </div>
                    &nbsp;
                    <div className="ui section divider"></div>
                    <div className="field">
                        <button className={`ui primary button right floated ${validationForm() && 'disabled'}`} type="submit" onClick={onSubmit}>Simpan</button>
                    </div>
                </div>
            </div>

            modal && <Modal listUser={listUser} sync={sync} setModal={setModal} setPhoto={setPhoto} />
        </div>
    )
}

export default UserForm