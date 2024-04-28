import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Register() {
    const navigate = useNavigate();

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
            if (response.data.error) {
                setErrorMessage(response.data.error);
            } else {
                navigate("/");
            }
        }).catch((error) => {
            console.error('Error during registration:', error);
            setErrorMessage("Registration unsuccessful!");
        });
    }

    return (
        <div className='register'>
            <div className='container'>
                <div className='formContainer'>
                    <h1>Sign Up</h1>
                    <form className='registerForm' onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type='text' name='username' onChange={(e) => { setUsernameReg(e.target.value); }} required />

                        <label>Password</label>
                        <input type='password' name='password' onChange={(e) => { setPasswordReg(e.target.value); }} required />

                        <button type='submit'>Register</button>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
