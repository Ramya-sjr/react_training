import React from 'react'

const Card = ({ title = "None", buttonText = "No Text", cardText = "NOO", src = "NO" }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={src}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {cardText}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
            </div>
        </div>
    )
}

export default Card