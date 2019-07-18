import React from 'react'
import ReviewsStarsContainer from '../containers/ReviewsStarsContainer.js'

const Reviews = (props) => {
    if (!props.meta.recommended[1]) {
        var recommended = '0%'
    } else {
        var recommended = ((props.meta.recommended[1] / (props.meta.recommended[0] + props.meta.recommended[1])) * 100).toFixed().toString() + '%'
    }
    return (
        <React.Fragment>
            
            <div>Rating &amp; Reviews</div>
            <div>{recommended} of reviews recommend this product</div>
            <div><ReviewsStarsContainer /></div>
        </React.Fragment>
    )
}

export default Reviews