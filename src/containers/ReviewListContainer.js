import { connect } from 'react-redux'
import ReviewList from '../components/ReviewList'
import reviewsLength from '../actions/reviewsLength.js'
import reviewsLoaded from '../actions/reviewsLoaded.js'

const mapStateToProps = (store) => ({
    reviews: store.reviews,
    meta: store.meta,
    barFilter: store.reviewsChangeBarFilter,
    reviewsLength: store.reviewsLengthReducer,
    loadedReviews: store.reviewsLoadedReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLengthChange: () => {
            dispatch(reviewsLength())
        },
        handleLoadedChange: (arr) => {
            dispatch(reviewsLoaded(arr))
        }
    }
}

const ReviewListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewList)

export default ReviewListContainer