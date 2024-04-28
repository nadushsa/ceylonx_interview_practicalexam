// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const loggedInUsername = localStorage.getItem("username");
    const navigate =useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username"); 
        navigate("/");
    };

    return (
        <div className='navbarArea'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src='/img/brand.png' className='brandImg' alt="Brand Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav container">
                            <span className='left'>
                                <Link className="nav-link active" aria-current="page" to="/about">
                                    <img src='/img/btnAbout.png' className='btnImgAbout' alt="About"/>
                                </Link>
                                
                                <Link className="nav-link active" aria-current="page" to="/math">
                                    <img src='/img/btnMath.png' className='btnImgMath' alt="Math"/>
                                </Link>
                            </span>

                            <span className='right'>
                            <Link className='nav-link active'>
                                <img src='/img/waContact.png' className='btnImgContact' alt="Contact"/>
                            </Link>
                            
                            {loggedInUsername ? (
                                <div className='user'>
                                    <span className="nav-link active username">{loggedInUsername}</span>
                                    <button className="nav-link active btnLogout" onClick={handleLogout}>Logout</button>
                                </div>
                            ) : (
                                <>
                                    <Link className="nav-link active" to="/register">
                                        <button className='btnRegister'>Register</button>
                                    </Link>
                                    <Link className="nav-link active" to='/login'>
                                        <img src='/img/btnLogin.png' className='btnImgLogin' alt="Login"/>
                                    </Link>
                                </>
                            )}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
