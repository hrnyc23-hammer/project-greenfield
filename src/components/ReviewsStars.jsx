import React from 'react';

const ReviewsStars = (props) => {
  const getRating = meta => {
    var totalRatings = 0;
    var numberOfRatings = 0;
    for (let key in meta.ratings) {
      totalRatings = totalRatings + key * meta.ratings[key];
      numberOfRatings = numberOfRatings + meta.ratings[key];
    }
    const rating = (totalRatings / numberOfRatings).toFixed(1);
    return rating;
  };
  let rating = getRating(props.meta);
  const width = isNaN(rating) ? '0%' : (rating * 20).toString() + '%';

  return (
      <div style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', fontSize: '0', height: '21px', lineHeight: '0', overflow: 'hidden', textIndent: '-999em', width: '110px' }}>
        <span style={{ width: width, background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', backgroundPosition: '0 100%', float: 'left', height: '21px', display: 'block' }}>
        </span>
      </div>
  )
}

export default ReviewsStars;