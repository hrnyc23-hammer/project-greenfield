import React, { useState } from 'react'
import moment from 'moment'
import Button from "@material-ui/core/Button"
import ReviewsModal from './ReviewsModal'
import ReviewsImageModal from './ReviewsImageModal'
import { putReport, getSortedReviews, putHelpful, postReview, getMeta, clickTracker } from '../infoFetchers.js'

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
        getSortedReviews(props.reviews.product, sort, page)
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

    const handleReport = id => {
        putReport(id)
            .then(() => {
                alert('Review reported. It will no longer show up on future page loads.')
            })
            .catch((err) => {
                console.log('API request error')
            })
    }

    const handleHelpful = id => {
        putHelpful(id)
            .then(() => {
                getSortedReviews(props.reviews.product, sort, page)
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
            })
            .catch((err) => {
                console.log('API request error')
            })
    }

    const handleSubmitReview = (rating, summary, body, recommend, name, email, photos, size, width, comfort, length, fit, quality) => {
        if (rating === 0) {
            alert('Rating is required')
        } else if (summary === '') {
            alert('Summary is required')
        } else if (body.length < 50) {
            alert('Body must be at least 50 characters')
        } else if (name === '') {
            alert('Name is required')
        } else if (email === '' || !email.split('').includes('@')) {
            alert('Please enter a valid email')
        } else if (props.meta.characteristics.Size && size === 0) {
            alert('Size is required')
        } else if (props.meta.characteristics.Width && width === 0) {
            alert('Width is required')
        } else if (props.meta.characteristics.Comfort && comfort === 0) {
            alert('Comfort is required')
        } else if (props.meta.characteristics.Length && length === 0) {
            alert('Length is required')
        } else if (props.meta.characteristics.Fit && fit === 0) {
            alert('Fit is required')
        } else if (props.meta.characteristics.Quality && quality === 0) {
            alert('Quality is required')
        } else {
            var characteristics = {}
            if (props.meta.characteristics.Size) {
                characteristics.Size = {
                    id: props.meta.characteristics.Size.id,
                    value: size.toString()
                }
            }
            if (props.meta.characteristics.Width) {
                characteristics.Width = {
                    id: props.meta.characteristics.Width.id,
                    value: width.toString()
                }
            }
            if (props.meta.characteristics.Comfort) {
                characteristics.Comfort = {
                    id: props.meta.characteristics.Comfort.id,
                    value: comfort.toString()
                }
            }
            if (props.meta.characteristics.Length) {
                characteristics.Length = {
                    id: props.meta.characteristics.Length.id,
                    value: length.toString()
                }
            }
            if (props.meta.characteristics.Fit) {
                characteristics.Fit = {
                    id: props.meta.characteristics.Fit.id,
                    value: fit.toString()
                }
            }
            if (props.meta.characteristics.Quality) {
                characteristics.Quality = {
                    id: props.meta.characteristics.Quality.id,
                    value: quality.toString()
                }
            }
            postReview(props.reviews.product, rating.toString(), summary, body, recommend, name, email, photos, characteristics)
                // .then((results) => {
                //     console.log(results)
                // })
                .then(() => {
                    getSortedReviews(props.reviews.product, sort, page)
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
                        .then(() => {
                            getMeta(props.reviews.product)
                                .then(({ data }) => {
                                    props.handleMetaChange(data)
                                })
                                .catch((err) => {
                                    console.log('API request error')
                                })
                        })
                        .catch((err) => {
                            console.log('API request error')
                        })
                })
                .catch((err) => {
                    console.log('API request error')
                    getSortedReviews(props.reviews.product, sort, page)
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
                        .then(() => {
                            getMeta(props.reviews.product)
                                .then(({ data }) => {
                                    props.handleMetaChange(data)
                                })
                                .catch((err) => {
                                    console.log('API request error')
                                })
                        })
                        .catch((err) => {
                            console.log('API request error')
                        })
                })
        }
    }

    const handleMoreReviews = () => {
        if (props.reviewsLength + 2 > props.loadedReviews.length) {
            page++
            getSortedReviews(props.reviews.product, sort, page)
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
            <h4 style={{ fontFamily: 'roboto' }}>{totalReviews} reviews, sorted by <select style={{ fontFamily: 'roboto' }} defaultValue={sort} onChange={(e) => handleSortChange(e.target.value)} onClick={() => clickTracker('review sort', 'reviews')}>
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
                                    <span style={{ fontFamily: 'roboto', fontSize: 'small', float: 'right' }}><strong>{review.reviewer_name}</strong>   {moment(review.date).format('ddd, MMM Do YYYY')}</span>
                                </div>
                                <h3 style={{ fontFamily: 'roboto' }}>{review.summary}</h3>
                                <p style={{ fontFamily: 'roboto' }}>{review.body}</p>
                                {review.photos.map((photo) => {
                                    return <React.Fragment key={photo.id}><img onClick={() => { setUrl(photo.url); toggleOpenImage(); clickTracker('epxand review image', 'reviews') }} style={{ maxHeight: '100px', marginRight: '10px' }} src={photo.url}></img>
                                        <ReviewsImageModal product={props.reviews.product} open={openImage} handleClose={handleCloseImage} url={url} /></React.Fragment>
                                })}
                                {(review.recommend === 1) ? <React.Fragment><p style={{ fontFamily: 'roboto' }}><strong>✓</strong> I recommend this product</p></React.Fragment> : null}
                                {(review.response) ? <div style={{ background: 'lightblue', padding: '10px 20px', borderRadius: '20px' }}>
                                    <p style={{ fontFamily: 'roboto' }}><strong>Response:</strong></p>
                                    <p style={{ fontFamily: 'roboto' }}>{review.response}</p>
                                </div> : null}
                                <br />
                                <span style={{ fontSize: 'small', fontFamily: 'roboto' }}>Was this review helpful?   </span>
                                <span onClick={() => { handleHelpful(review.review_id); clickTracker('helpful review', 'reviews') }} style={{ fontSize: 'small', textDecoration: 'underline' }}>Yes</span>
                                <span style={{ fontSize: 'small', fontFamily: 'roboto' }}>({review.helpfulness})</span>
                                <span style={{ fontSize: 'small', fontFamily: 'roboto', paddingLeft: '20px', paddingRight: '20px' }}>|</span>
                                <span onClick={() => { handleReport(review.review_id); clickTracker('report review', 'reviews') }} style={{ fontSize: 'small', textDecoration: 'underline' }}>Report</span>
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
            <ReviewsModal meta={props.meta} handleSubmitReview={handleSubmitReview} open={open} handleClose={handleClose} />

        </React.Fragment>
    )
}

export default ReviewList