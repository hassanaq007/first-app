import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div className="welcome" style={{ minHeight: "75vh", padding: "40px 20px", textAlign: "center" }} >
                <h1>Hello! Welcome To Student Portal</h1>
                <p className="text-muted mt-3">
                    Manage students, courses, and academic reports in one place.
                </p>

                <div className="container mt-5">
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <h4>Total Students</h4>
                                <h2 className="text-primary">11</h2>
                                <p className="text-muted mb-0">
                                    Registered students
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <h4>Total Courses</h4>
                                <h2 className="text-success">18</h2>
                                <p className="text-muted mb-0">
                                    Available courses
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow-sm p-4">
                                <h4>Total Reports</h4>
                                <h2 className="text-warning">10</h2>
                                <p className="text-muted mb-0">
                                    Generated reports
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="card shadow-sm mt-5 p-4 text-start">
                        <h4>About Student Portal</h4>
                        <p className="mb-0">
                            Student Portal helps manage student information, organize courses, and view academic reports. Use the navigation bar to explore the different sections of the portal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
