import React from 'react'
import ReviewsStarsContainer from '../containers/ReviewsStarsContainer.js'

const Reviews = (props) => {
    return (
        <React.Fragment>
            <p>Reviews: {props.meta.product_id}</p>
            <ReviewsStarsContainer />
        </React.Fragment>
    )
}

export default Reviews