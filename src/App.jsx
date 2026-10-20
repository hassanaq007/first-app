import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Imported Pages
import HomePage from './pages/HomePage'
import StudentsPage from './pages/StudentsPage'
import CoursesPage from './pages/CoursesPage'
import ReportsPage from './pages/ReportsPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/students' element={<StudentsPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/reports' element={<ReportsPage/>}/>
      </Routes>
    
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
