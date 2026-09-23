import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav(){
    return(
        <nav className="navbar bg-dark nav-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Ethan Benzaquen</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto"  >
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/projectsPage">Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/aboutPage">About Me</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/blogPage">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/contactPage">Contact</Link>
                        </li>
                    </ul>
                </div>    
                </div>            
        </nav>
    )
}