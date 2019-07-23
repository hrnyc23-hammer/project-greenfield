import React, { useState } from 'react'
import moment from 'moment'
import Button from "@material-ui/core/Button"
import ReviewsModal from './ReviewsModal'
import ReviewsImageModal from './ReviewsImageModal'
import axios from 'axios'

const ReviewList = (props) => {
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(false)
    const [url, setUrl] = useState(undefined)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpenImage = () => {
        setOpenImage(true)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseImage = () => {
        setOpenImage(false)
    }

    const toggleOpen = () => {
        open ? handleClose() : handleOpen();
    }
    const toggleOpenImage = () => {
        openImage ? handleCloseImage() : handleOpenImage()
    }

    var totalReviews = 0
    for (let key in props.meta.ratings) {
        totalReviews = totalReviews + props.meta.ratings[key]
    }

    var page = 1
    var sort = 'relevant'


    const handleSortChange = (sortOption) => {
        sort = sortOption
        page = 1
        axios.get(`http://18.222.40.124/reviews/${props.reviews.product}/list?count=4&sort=${sort}&page=${page}`)
            .then(({ data }) => {
                props.handleReviewsChange(data)
                return data
            })
            .then((data) => {
                props.handleLoadedReset()
                return data
            })
            .then((data) => {
                props.handleLoadedChange(data.results)
            })
            .then(() => {
                props.handleLengthReset()
            })
            .catch((err) => {
                console.log('API request error')
            })
    }

    const handleMoreReviews = () => {
        if (props.reviewsLength + 2 > props.loadedReviews.length) {
            page++
            axios.get(`http://18.222.40.124/reviews/${props.reviews.product}/list?count=4&sort=${sort}&page=${page}`)
                .then(({ data }) => {
                    props.handleLoadedChange(data.results)
                })
                .then(() => {
                    props.handleLengthChange()
                })
                .catch((err) => {
                    console.log('API request error')
                })
        } else {
            props.handleLengthChange()
        }
    }

    return (
        <React.Fragment>
            <h4>{totalReviews} reviews, sorted by <select defaultValue={sort} onChange={(e) => handleSortChange(e.target.value)}>
                <option value='relevant'>relevance</option>
                <option value='helpful'>helpfulness</option>
                <option value='newest'>new</option>
            </select></h4>
            <div>
                {props.loadedReviews.map((review, index) => {
                    if ((props.barFilter.length === 0 || props.barFilter.includes(review.rating)) && index <= props.reviewsLength) {
                        return (
                            <React.Fragment key={review.review_id}>
                                <div style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', fontSize: '0', height: '21px', lineHeight: '0', overflow: 'hidden', textIndent: '-999em', width: '110px' }}>
                                    <span style={{ width: `${review.rating * 20}%`, background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png) repeat-x', backgroundPosition: '0 100%', float: 'left', height: '21px', display: 'block' }}>
                                    </span>
                                </div >
                                <div>
                                    <span style={{ fontSize: 'small', float: 'right' }}><strong>{review.reviewer_name}</strong>   {moment(review.date).format('ddd, MMM Do YYYY')}</span>
                                </div>
                                <h3>{review.summary}</h3>
                                <p>{review.body}</p>
                                {review.photos.map((photo) => {
                                    return <React.Fragment key={photo.id}><img onClick={() => { setUrl(photo.url); toggleOpenImage() }} style={{ maxHeight: '100px', marginRight: '10px' }} src={photo.url}></img>
                                        <ReviewsImageModal open={openImage} handleClose={handleCloseImage} url={url} /></React.Fragment>
                                })}
                                {(review.recommend === 1) ? <React.Fragment><p><strong>✓</strong> I recommend this product</p></React.Fragment> : null}
                                {(review.response) ? <div style={{ background: 'lightblue', padding: '10px 20px', borderRadius: '20px' }}>
                                    <p><strong>Response:</strong></p>
                                    <p>{review.response}</p>
                                </div> : null}
                                <br />
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
            <span>{(props.reviewsLength < totalReviews - 1) ? <Button variant='contained' style={{ marginRight: '20px' }} onClick={handleMoreReviews}>More Reviews</Button> : null}<Button variant='contained' onClick={toggleOpen}>Add A Review    +</Button></span>
            <ReviewsModal open={open} handleClose={handleClose} />
        </React.Fragment>
    )
}

export default ReviewList