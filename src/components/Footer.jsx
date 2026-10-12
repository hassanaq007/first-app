import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-lg-start mt-3 py-3 text-light">
                <div className='container mb-0 mt-2'>
                    <div className="row justify-content-center text-center text-md-start">

                        <div className="col-md-3 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
                            <div>
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li>Home</li>
                                    <li>Students</li>
                                    <li>Courses</li>
                                    <li>Reports</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
                            <div>
                                <h5>Contact Us</h5>
                                <ul className="list-unstyled">
                                    <li>Phone: +1 234 567 890</li>
                                    <li>support@hassan.inc</li>
                                    <li>
                                        <a className='page-link' href="https://maps.app.goo.gl/i9d6h7S9rwEURZox5">
                                            Location: 1600 Amphitheatre Parkway, Mountain View, California 94043, United States
                                        </a>
                                        </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container text-center border-top border-secondary pt-3">
                    <span className="text-light">&copy; 2026 Hassan, Inc. All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer