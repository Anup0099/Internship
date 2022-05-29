import React from 'react'
import './review.css'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Reviews = () => {
    return (
        <div className="reviews">

            <div className="reviews-title">
                <h1>Reviews</h1>


            </div>

            <div className="reviews-arrows">
                <h5>1/12</h5>
                <ArrowBackIcon/>
                <ArrowForwardIcon sx={{color: '#fff'}}/>

            </div>

        </div>
    )
}

export default Reviews