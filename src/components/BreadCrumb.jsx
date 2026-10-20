import React from 'react'

const BreadCrumb = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadnav">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Students</a></li>
          <li className="breadcrumb-item active" aria-current="page">Directory</li>
        </ol>
      </nav>
    </div>
  )
}

export default BreadCrumb