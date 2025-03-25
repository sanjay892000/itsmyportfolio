import React, { useEffect, useState } from 'react'
import './reviews.css'
import SocialLogin from '../modal/SocialLogin';
import ReviewCard from './reviewcard/ReviewCard';
import ReviewCarousel from './review-carousel/ReviewCarousel';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
/* const SLIDES = Array.from(Array(SLIDE_COUNT).keys()) */
const SLIDES = [{
    id: 1,
    name: 'nida ansari',
    feed: 'An exceptional teacher who not only imparts knowledge but also inspires students to think critically and grow with confidence. Truly a guiding light in education.',
    image: 'https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/nida_ansari.webp'
}, {
    id: 2,
    name: 'ankesh',
    feed: 'A compassionate and dedicated educator who creates a nurturing environment where every student feels valued and motivated to learn.',
    image: 'https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/ankesh.webp'
}, {
    id: 3,
    name: 'preeti kumari',
    feed: 'The passion for teaching shines through in every lesson. Complex concepts are made simple, and learning becomes a joyful experience.',
    image: 'https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/4.webp'
}, {
    id: 4,
    name: 'anuj singh',
    feed: 'Incredible teaching methods that make complex concepts easy to understand. Students thrive under this guidance.',
    image: 'https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/6.webp'
}]

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
             <SocialLogin handleClose={handleClose} open={open} />
            <div className="reviews-container">
                <ReviewCarousel slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="reviews-card-container">
                <div className="add-reviews">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </section>
    )
}

export default Reviews
