import React from 'react';

const ReviewsRating = (props) => {
  const getRating = (meta) => {
    var totalRatings = 0;
    var numberOfRatings = 0;
    for (let key in meta.ratings) {
      totalRatings = totalRatings + key * meta.ratings[key];
      numberOfRatings = numberOfRatings + meta.ratings[key];
    }
    const rating = (totalRatings / numberOfRatings).toFixed(1);
    return rating;
  }

  let rating = getRating(props.meta);

  return <span style={{ fontSize: 'large', margin: '0px 10px 0px 0px', float: 'left', fontFamily: 'roboto' }}><strong>{isNaN(rating) ? 0.0 : rating}</strong></span>
}

export default ReviewsRating;