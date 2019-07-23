import { connect } from 'react-redux'
import ReviewList from '../components/ReviewList'
import reviewsLength from '../actions/reviewsLength.js'
import reviewsLoaded from '../actions/reviewsLoaded.js'
import reviewsLengthReset from '../actions/reviewsLengthReset.js'
import reviewsChange from '../actions/reviewsChange.js'
import reviewsLoadedReset from '../actions/reviewsLoadedReset.js'
import changeMeta from '../actions/changeMeta.js'

const mapStateToProps = (store) => ({
    reviews: store.reviews,
    meta: store.meta,
    barFilter: store.reviewsChangeBarFilter,
    reviewsLength: store.reviewsLengthReducer,
    loadedReviews: store.reviewsLoadedReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadedReset: () => {
            dispatch(reviewsLoadedReset())
        },
        handleReviewsChange: (reviews) => {
            dispatch(reviewsChange(reviews))
        },
        handleLengthChange: () => {
            dispatch(reviewsLength())
        },
        handleLengthReset: () => {
            dispatch(reviewsLengthReset())
        },
        handleLoadedChange: (arr) => {
            dispatch(reviewsLoaded(arr))
        },
        handleMetaChange: (meta) => {
            dispatch(changeMeta(meta))
        }
    }
}

const ReviewListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewList)

export default ReviewListContainer