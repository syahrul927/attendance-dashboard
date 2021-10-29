import React, { useEffect, useState } from 'react'
import httpHelper from '../../../api'
import API from '../../../api/pathApi.json'
import ModalAuth from './ModalAuth'

const Login = () => {

    const [form, setForm] = useState({ username: '', password: '' })
    const [modal, setModal] = useState(false)
    const [statusAuth, setStatusAuth] = useState(false)
    const [loginLoading, setLoginLoading] = useState(false)
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = async () => {
        if (form.username && form.password) {

            setLoginLoading(true)
            console.log('on Submit Euy')
            await httpHelper(API.authApi.login, form).then(res => {
                if (200 !== res.status) {
                    setStatusAuth(false)
                }
                if (res.data.accessToken) {
                    setStatusAuth(true)
                    successLogin(res.data.accessToken)
                }
            }).catch(err => {
                console.log(err)
                setStatusAuth(false)
            }).finally(() => {
                setModal(true)
                setLoginLoading(false)
            })
        }
    }
    const successLogin = async token => {
        await localStorage.setItem('token', token)
    }
    return (
        <div className="ui container">
            <div className="ui raised very padded text container segment" style={{ marginTop: '100px' }}>
                <h2 className="ui header">Login </h2>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input placeholder="Username" type="text" name="username" value={form.username} id="username" onChange={onChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="password" name="password" value={form.password} id="password" onChange={onChange} />
                    </div>
                    <div className="field">
                        <button className={`ui primary button ${loginLoading && 'disabled'} `} onClick={onSubmit}>Login</button>
                    </div>
                </div>
            </div>
            {modal && <ModalAuth setModal={setModal} statusAuth={statusAuth} />}
        </div>
    )
}
export default Login
