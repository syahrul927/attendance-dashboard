import React from 'react'

const Login = () => {
    return(
        <div className="ui container">
            <div class="ui raised  very padded text container segment" style={{marginTop:'100px'}}>
                <h2 className="ui header">Login </h2>
                <form action="" className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input placeholder="Username" type="text" name="username" id="username"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="password" name="password" id="password"/>
                    </div>
                    <div className="field">
                        <button className="ui primary button" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
