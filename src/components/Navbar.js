import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './navbar.css';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark menu">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-5 mb-md-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/About">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Product">Products</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Blog">Blog</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Service">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;