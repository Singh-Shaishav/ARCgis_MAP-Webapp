import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary shadow-5-strong " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0  nav-pills ">
                            

                            <li className="nav-item">
                                <Link className="nav-link " to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
