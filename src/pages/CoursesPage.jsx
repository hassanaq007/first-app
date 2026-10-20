import React from 'react'
import Pagehead from '../components/Pagehead'

const CoursesPage = () => {
    return (
        <div>
            <Pagehead title="Courses" btnText="Add New Course" style={{ margin: "30px auto 20px" }}/>

            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Duration</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Web Development</td>
                            <td>Diego Maradona</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Database Management</td>
                            <td>Pelé</td>
                            <td>2 Months</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Python Programming</td>
                            <td>Ronaldinho</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Design and Analysis of Algorithms</td>
                            <td>Ronaldo Nazário</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Financial & Cost Accounting</td>
                            <td>Zinedine Zidane</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Graphic Design</td>
                            <td>Abdul Haleem</td>
                            <td>2 Months</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Military Leadership & Ethics</td>
                            <td>Thierry Henry</td>
                            <td>6 Months</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Fundamentals of Marketing Management</td>
                            <td>Zlatan Ibrahimović</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Artificial Intelligence</td>
                            <td>Johan Cruyff</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Cybersecurity</td>
                            <td>David Beckham</td>
                            <td>5 Months</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Cloud Computing</td>
                            <td>Francesco Totti</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Mobile App Development</td>
                            <td>Sergio Ramos</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Data Science</td>
                            <td>Andrés Iniesta</td>
                            <td>6 Months</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Computer Networks</td>
                            <td>Sergio Busquets</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Operating Systems</td>
                            <td>Xavi Hernández</td>
                            <td>4 Months</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Software Engineering</td>
                            <td>Luis Suárez</td>
                            <td>5 Months</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Human Resource Management</td>
                            <td>Didier Drogba</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Project Management</td>
                            <td>Andrea Pirlo</td>
                            <td>2 Months</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoursesPage
