import React from 'react'
import { useState } from 'react'

const Card = (props) => {
    const [views, setViews] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    const handleViews = () => {
        setViews(views + 1)
    }


    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text mb-0">ID: {props.id}</p>
                    <p className="card-text mb-2">Views: {views}</p>

                    {showDetails && (
                        <div className="details">
                            <p className="mb-0">Major: {props.major}</p>
                            <p className="mb-0">Year: {props.year}</p>
                            <p>CGPA: {props.cgpa}</p>
                        </div>
                    )}

                    <button
                        className="btn btn-primary"
                        style={{ marginRight: "5px" }}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? 'Hide Details' : 'Show Details'}
                    </button>

                    <button className="btn btn-secondary" onClick={handleViews}>
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card