import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BreadCrumb from './components/BreadCrumb'
import Card from './components/Card'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Pagehead from './components/Pagehead'

function App() {

  return (
    <>
      <Navbar />
      <BreadCrumb />
      <Pagehead />
      <div className='myContainer'>
        <div className='cards'>
          <Card  title="Lionel Messi" major="Software Engineering" year="2019" cgpa="3.9"/>
          <Card  title="Cristiano Ronaldo" major="Computer Science" year="2008" cgpa="3.8"/>
          <Card  title="Neymar Jr" major="Arts & Humanities" year="2015" cgpa="3.6"/>
          <Card  title="Lamine Yamal" major="Business & Finance" year="2026" cgpa="3.59"/>
          <Card  title="Kylian Mbappé" major="Military Science" year="2022" cgpa="3.85"/>
          <Card  title="Ousmane Dembélé" major="Computer Science" year="2025" cgpa="3.4"/>
        </div>
      </div>
      <Pagination />
      <Footer />
    </>
  )
}

export default App
