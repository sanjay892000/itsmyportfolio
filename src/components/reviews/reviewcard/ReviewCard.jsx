import React from 'react'
import './reviewcard.css'
function ReviewCard(props) {

    const {name, reviews, image} = props
    return (
        <div className="testimonial">
            <span className="open quote">“</span>
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src={image} />
                        </div>
                        <div class="name-user">
                            <strong>{name}</strong>
                            <span>@touseeqijazweb</span>
                            <span id='reviews-date'>02/03/2025 12:25</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="client-comment">
                    <p>{reviews}</p>
                </div>
            </div>
            <span className="close quote">”</span>
        </div>
    )
}

export default ReviewCard
