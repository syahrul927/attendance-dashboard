import React, { useState } from 'react'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import Modal from './Modal'
import history from '../../history'
import { UserContext } from '../context/userContext'

const UserForm = () => {
    const [form, setForm] = useState({ nama: '', telp: '' })
    const [modal, setModal] = useState(false)
    const [photo, setPhoto] = useState([])
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const { sync, listUser } = UserContext.Consumer



    const onSubmit = async () => {
        await httpHelper(API.userApi.addNew, form, true).then(res => {

            if (200 === res.status && res.data.success) {
                history.push('/user')
            } else {
                console.log(`error ${res.data}`)
            }
        })
    }
    const takePhoto = async () => {
        setModal(true)
    }
    const removePhoto = (idx) => {
        photo.splice(idx, 1)
        setPhoto([...photo])
    }
    const renderPhoto = (img, id) => {
        return (
            <div className="column" key={img}>
                <div className="column">
                    <img src={img} id={id} alt=""/>
                </div>
                <div className="column">
                    <button onClick={() => removePhoto(id)} className="ui red button">Hapus</button>
                </div>
            </div>
        )
    }

    const validationForm = () => {
        if (!form.nama || !form.telp || photo.length<2) {
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
                        <input type="number" value={form.telp} onChange={onChange} name="telp" placeholder="Nomor Telp" />
                    </div>
                    {photo.length ?
                        <div className="field">
                            <div className="ui two column grid">
                                {photo.map((p, idx) => renderPhoto(p, idx))}
                            </div>
                        </div> :
                        <div></div>
                    }
                    <div className="field">
                        <label htmlFor="">Upload Foto 2x</label>
                        <button className={`ui green button ${photo.length >= 2 && 'disabled'}`} onClick={takePhoto}>Ambil Gambar</button>
                    </div>
                    &nbsp;
                    <div className="ui section divider"></div>
                    <div className="field">
                        <button className={`ui primary button right floated ${validationForm() && 'disabled'}`} type="submit" onClick={onSubmit}>Simpan</button>
                    </div>
                </div>
            </div>

            {modal && <Modal listUser={listUser} sync={sync} setModal={setModal} listPhoto={photo} setPhoto={setPhoto} />}
        </div>
    )
}

export default UserForm