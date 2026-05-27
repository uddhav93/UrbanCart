import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to='/'>UrbanCart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className='nav-link'>Products</NavLink>
                            </li>
                        </ul>
                        <div className='ms-auto'>
                            <div className="dropdown btn-group dropstart">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu">
                                    <li><NavLink className='dropdown-item' to='/userlogin'>User Login</NavLink></li>
                                    <li><NavLink className='dropdown-item' to='/adminlogin'>Admin Login</NavLink></li>
                                    <li><NavLink className='dropdown-item' to='/sellerlogin'>Seller Login</NavLink></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
