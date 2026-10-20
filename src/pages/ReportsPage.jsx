
import React from 'react'
import Pagehead from '../components/Pagehead'

const ReportsPage = () => {
    return (
        <div>
            <Pagehead title="Reports" btnText="Generate Report" style={{ margin: "30px auto 20px" }} />

            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Report Name</th>
                            <th>Category</th>
                            <th>Generated Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Student Enrollment Report</td>
                            <td>Students</td>
                            <td>01-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Course Registration Report</td>
                            <td>Courses</td>
                            <td>03-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Student Attendance Report</td>
                            <td>Attendance</td>
                            <td>05-10-2026</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Examination Results</td>
                            <td>Academic</td>
                            <td>08-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Fee Collection Report</td>
                            <td>Finance</td>
                            <td>10-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Instructor Performance Report</td>
                            <td>Staff</td>
                            <td>12-10-2026</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Monthly Academic Summary</td>
                            <td>Academic</td>
                            <td>15-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Student Performance Report</td>
                            <td>Students</td>
                            <td>18-10-2026</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Outstanding Fees Report</td>
                            <td>Finance</td>
                            <td>19-10-2026</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Course Completion Report</td>
                            <td>Courses</td>
                            <td>20-10-2026</td>
                            <td>Completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportsPage
