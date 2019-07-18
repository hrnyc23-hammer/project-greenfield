import React from 'react'

const ReviewsStars = (props) => {
  var totalRatings = 0
  var numberOfRatings = 0
  for (let key in props.meta.ratings) {
    totalRatings = totalRatings + (key * props.meta.ratings[key])
    numberOfRatings = numberOfRatings + props.meta.ratings[key]
  }
  const rating = (totalRatings / numberOfRatings).toFixed(1)
  const width = isNaN(rating) ? '0%' : (rating * 20).toString() + '%';
  return (
    <React.Fragment>
      <span style={{ fontSize: 'large', margin: '0px 10px 0px 0px', float: 'left' }}>{isNaN(rating) ? 0.0 : rating}</span>
      <div style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', fontSize: '0', height: '21px', lineHeight: '0', overflow: 'hidden', textIndent: '-999em', width: '110px' }}>
        <span style={{ width: width, background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', backgroundPosition: '0 100%', float: 'left', height: '21px', display: 'block' }}>
        </span>
      </div >
    </React.Fragment >
  )
}

export default ReviewsStars