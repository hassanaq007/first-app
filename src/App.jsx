import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BreadCrumb from './components/BreadCrumb'
import Card from './components/Card'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Pagehead from './components/Pagehead'

function App() {
  
  const [students, setStudents] = useState([
    {title: "Lionel Messi", id: "101", major: "Software Engineering", year: "2019", cgpa: "3.9"},
    {title: "Cristiano Ronaldo", id: "102", major: "Computer Science", year: "2008", cgpa:"3.8"},
    {title: "Neymar Jr", id: "103", major: "Arts & Humanities", year: "2015", cgpa:"3.6"},
    {title: "Lamine Yamal", id: "104", major: "Business & Finance", year: "2026", cgpa:"3.59"},
    {title: "Kylian Mbappé", id: "105", major: "Military Science", year: "2022", cgpa:"3.85"},
    {title: "Ousmane Dembélé", id: "106", major: "Computer Science", year: "2025", cgpa:"3.4"}
  ])

  return (
    <>
      <Navbar />
      <BreadCrumb />
      <Pagehead />
      <div className='myContainer'>
        <div className='cards'>

          {students.map(student => {
            return <Card key={student.id} title={student.title} id={student.id} major={student.major} 
            year={student.year} cgpa={student.cgpa}></Card>
          })}
        
        </div>
      </div>
      <Pagination />
      <Footer />
    </>
  )
}

export default App
