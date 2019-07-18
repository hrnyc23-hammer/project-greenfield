import React from 'react'

const ReviewList = (props) => {
    return (
        <React.Fragment>
            <h4>{props.reviews.results.length} reviews, sorted by relevance</h4>
            <div>
                {props.reviews.results.map((review) => {
                    if (props.barFilter.length === 0 || props.barFilter.includes(review.rating)) {
                        return (
                            <React.Fragment key={review.review_id}>
                                <div style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', fontSize: '0', height: '21px', lineHeight: '0', overflow: 'hidden', textIndent: '-999em', width: '110px' }}>
                                    <span style={{ width: `${review.rating * 20}%`, background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', backgroundPosition: '0 100%', float: 'left', height: '21px', display: 'block' }}>
                                    </span>
                                </div >
                                <div>
                                    <span>{review.reviewer_name}   {review.date}</span>
                                </div>
                                <h3>{review.summary}</h3>
                                <p>{review.body}</p>
                                <br />
                                {(review.recommend === 1 ? <p>✓ I recommend this product</p> : null)}
                                <span style={{ fontSize: 'small' }}>Was this review helpful?   </span>
                                <span style={{ fontSize: 'small', textDecoration: 'underline' }}>Yes</span>
                                <span style={{ fontSize: 'small' }}>({review.helpfulness})</span>
                                <span style={{ fontSize: 'small', paddingLeft: '20px', paddingRight: '20px' }}>|</span>
                                <span style={{ fontSize: 'small', textDecoration: 'underline' }}>Report</span>
                                <hr />
                                <br />
                            </React.Fragment>
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        </React.Fragment>
    )
}

export default ReviewList