import React from 'react'
import './reviewcard.css'
function ReviewCard(props) {

    const {name, reviews, image} = props
    return (
        <div className="testimonial">
            <span className="open quote">“</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde esse eum dolorem minus nisi? Labore similique nisi aliquid tempora accusamus, cum ex. Cum voluptas iste minima similique laborum est culpa autem nesciunt sequi architecto itaque qui, omnis, excepturi error impedit dicta, voluptate amet? Non vero rerum explicabo voluptatem dolor voluptate?
            <span className="close quote">”</span>
        </div>
    )
}

export default ReviewCard
