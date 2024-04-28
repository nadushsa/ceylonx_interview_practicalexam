// Login.js
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:5000/login", {
            username: username,
            password: password,
        }).then((response) => {
            if(response.status === 200) {
                localStorage.setItem("username", username); 
                setUsername(username);
                navigate("/");
            } else {
                setError("Invalid credentials");
            }
        }).catch((error) => {
            setError("Invalid credentials!");
        });

 
    };

    return (
        <div className='login'>
            <div className='container'>
                <div className='formContainer'>
                    <h1>Sign In</h1>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type='text' name='username' onChange={(e) => { setUsername(e.target.value); }} required />

                        <label>Password</label>
                        <input type='password' name='password' onChange={(e) => { setPassword(e.target.value); }} required />

                        <button type='submit'>Sign In</button>

                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
