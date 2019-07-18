import React from 'react';
import ReviewsStars from './ReviewsStars.jsx';
import ReviewsRating from './ReviewsRating.jsx';


const ReviewsScores = (props) => {
  return (
    <React.Fragment>
      <ReviewsRating meta={props.meta}/>
      <ReviewsStars meta={props.meta}/>
    </React.Fragment >
  )
}

export default ReviewsScores;