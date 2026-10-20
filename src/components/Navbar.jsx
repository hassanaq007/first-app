import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontSize:"large" }}>
        //     <div className="container-fluid">
        //         <NavLink className="navbar-brand fw-bolder" to="/" style={{ fontSize:"30px" }}>Student Portal</NavLink>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" aria-current="page" to="/">Dashboard</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/students">Students</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/courses">Courses</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/reports">Reports</NavLink>
        //                 </li>
        //             </ul>
        //             <form className="d-flex">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item dropdown">
        //                         <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Setting
        //                         </NavLink>
        //                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                             <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
        //                             <li><hr className="dropdown-divider" /></li>
        //                             <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontSize:"large" }}>
            <div className="container-fluid d-flex justify-content-between">
                <NavLink className="navbar-brand fw-bolder" to="/"  style={{ fontSize:"26px" }}>Student Portal</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/students">Students</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reports">Reports</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar