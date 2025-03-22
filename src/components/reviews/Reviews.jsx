import React, { useEffect, useState } from 'react'
import './reviews.css'
import SocialLogin from '../modal/SocialLogin';
import ReviewCard from './reviewcard/ReviewCard';



const OPTIONS = { loop: true }
function Reviews() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        handleOpen();
    }, [])

    return (
        <section id='reviews-section'>
            <div className="about-title">
                <h1>write <span>Reviews</span></h1>
                <h2 className='resume'>Reviews</h2>
            </div>
           {/*  <SocialLogin handleClose={handleClose} open={open}/> */}
        </section>
    )
}

export default Reviews
