import React from 'react'
import ReviewsScoresContainer from '../containers/ReviewsScoresContainer.js'
import ReviewsBarsContainer from '../containers/ReviewsBarsContainer.js';
import ReviewListContainer from '../containers/ReviewListContainer.js'
import Typography from '@material-ui/core/Typography'

const Reviews = (props) => {
    var recommended;
    if (!props.meta.recommended[1]) {
        recommended = '0%'
    } else {
        recommended = (((props.meta.recommended[1] || 0) / ((props.meta.recommended[0] || 0) + (props.meta.recommended[1] || 0))) * 100).toFixed().toString() + '%'
    }
    return (
        <React.Fragment>
            <div id="reviews" style={{ float: 'left' }}>
                <h3><Typography>Rating &amp; Reviews</Typography></h3>

                <div><ReviewsScoresContainer /></div>
                <div><Typography>{recommended} of reviews recommend this product</Typography></div>
                <div><ReviewsBarsContainer /></div>
            </div>
            <div style={{ marginLeft: '350px' }}><ReviewListContainer /></div>
        </React.Fragment>
    )
}

export default Reviews