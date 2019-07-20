import React from 'react';
import ReviewsStars from './ReviewsStars';
import ReviewsRating from './ReviewsRating';


const ReviewsScores = (props) => {
  return (
    <React.Fragment>
      <ReviewsRating meta={props.meta}/>
      <ReviewsStars meta={props.meta}/>
    </React.Fragment >
  )
}

export default ReviewsScores;