import React, { useState, useContext } from 'react'
import UserContex from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContex)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
        // console.log(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
        // console.log(e.target.value);
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username' onChange={handleUsername} value={username}/>
            <br />
            <input type="text" placeholder='password' onChange={handlepassword} value={password}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
