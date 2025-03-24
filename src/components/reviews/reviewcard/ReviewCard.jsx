import React from 'react'
import './reviewcard.css'
function ReviewCard(props) {

    const {name, reviews, image} = props
    return (
        <div className="testimonial">
            <span className="open quote">“</span>
            <div className="image">
                <div className="clip"></div>
                <img src={image} />
            </div>
            <p>{reviews}</p>
            <div className="source">
                <span>{name}</span>
            </div>
            <span className="close quote">”</span>
        </div>
    )
}

export default ReviewCard
