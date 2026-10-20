import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import BreadCrumb from '../components/BreadCrumb'
import Pagination from '../components/Pagination'
import Pagehead from '../components/Pagehead'

const StudentsPage = () => {
    const [students, setStudents] = useState([
    { title: "Lionel Messi", id: "101", major: "Software Engineering", year: "2022", cgpa: "3.9" },
    { title: "Cristiano Ronaldo", id: "102", major: "Computer Science", year: "2008", cgpa: "3.8" },
    { title: "Neymar Jr", id: "103", major: "Arts & Humanities", year: "2015", cgpa: "3.6" },
    { title: "Lamine Yamal", id: "104", major: "Business & Finance", year: "2024", cgpa: "3.59" },
    { title: "Kylian Mbappé", id: "105", major: "Military Science", year: "2018", cgpa: "3.85" },
    { title: "Ousmane Dembélé", id: "106", major: "Computer Science", year: "2025", cgpa: "3.4" },
    { title: "Erling Haaland", id: "107", major: "Sports Science", year: "2023", cgpa: "3.7" },
    { title: "Mohamed Salah", id: "108", major: "Business & Finance", year: "2019", cgpa: "3.8" },
    { title: "Jude Bellingham", id: "109", major: "Political Science", year: "2024", cgpa: "3.6" },
    { title: "Vinícius Júnior", id: "110", major: "Arts & Humanities", year: "2022", cgpa: "3.7" },
    { title: "Rodri", id: "111", major: "Data Science", year: "2024", cgpa: "3.9" }
])

  return (
    <div>
        <BreadCrumb />
        <Pagehead title="Students" btnText="Add New Student"/>
        <div className='myContainer'>
            <div className='cards'>

            {students.map(student => {
                return <Card key={student.id} title={student.title} id={student.id} major={student.major} 
                year={student.year} cgpa={student.cgpa}></Card>
            })}
            
            </div>
        </div>
        <Pagination />
    </div>
  )
}

export default StudentsPage