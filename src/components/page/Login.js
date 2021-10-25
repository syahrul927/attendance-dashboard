import React, {useState} from 'react'
import axios from '../../api'

const Login = () => {

    const [form, setForm] = useState({username:'', password:''})
    const onChange = e => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const onSubmit = async () => {
        await axios.post('/login', form).then(res => {
            if(200!==res.status){
                alert('user atau password salah')
            }
        })
    }
    return(
        <div className="ui container">
            <div className="ui raised  very padded text container segment" style={{marginTop:'100px'}}>
                <h2 className="ui header">Login </h2>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input placeholder="Username" type="text" name="username" value={form.username} id="username" onChange = {onChange}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="password" name="password" value={form.password} id="password" onChange = {onChange}/>
                    </div>
                    <div className="field">
                        <button className="ui primary button" onClick={onSubmit}>Login</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Login
