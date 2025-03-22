import React from 'react'
import './reviewcard.css'
function ReviewCard() {
    return (
        <div className="testimonial">
            <span className="open quote">“</span>
            <div className="image">
                <div className="clip"></div>
                <img src="https://placehold.co/100" />
            </div>
            <p>This is some testimonial text for this month's CodePen challenge! This is some testimonial text for this month's CodePen challenge!</p>
            <div className="source">
                <span>Testimonial Source</span>
            </div>
            <span className="close quote">”</span>
        </div>
    )
}

export default ReviewCard
