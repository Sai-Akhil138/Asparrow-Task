import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="navbar-container container">
                <a className="navbar-brand fw-bold fs-3" href="/">Brand.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark ms-4 ms-md-0" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark ms-4 ms-md-0 login-bg" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
