import React, { useState } from 'react'
import axios from '../../api'
import Modal from './Modal'
import history from '../history'
const UserForm = () => {

    const [form, setForm] = useState({ nama: '', phone: '' })
    const [modal, setModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = async () => {
        // await axios.post('/user/add', form).then(res => {
        //     if(200!==res.status){
        //         alert('user atau password salah')
        //     }
        // })
        history.push('/user')
    }
    const takePhoto = async () => {
        setModal(true)
    }

    const validationForm = () => {
        if(!form.nama || !form.phone || !photo){
            return true
        }
        return false
    }

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
                        <input type="number" value={form.phone} onChange={onChange} name="phone" placeholder="Nomor Telp" />
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
            {modal && <Modal setModal={setModal} setPhoto={setPhoto} />}
        </div>
    )
}

export default UserForm