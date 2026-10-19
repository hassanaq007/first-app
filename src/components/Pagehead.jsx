import { useState } from 'react'
import React from 'react'

const Pagehead = () => {
    const [showAlert, setShowAlert] = useState(false)

    return (
        <div className='pagehead'>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand"><h3 className="mb-0">Students</h3></a>
                    <button className="btn btn-primary" type="submit" onClick={ () => setShowAlert(true)}>Add New Student</button>
                </div>
            </nav>
            {showAlert && (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Work in Progress!</strong>
                    {' '}Feature Coming Soon.
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}/>
                </div>
            )}
        </div>
    )
}

export default Pagehead