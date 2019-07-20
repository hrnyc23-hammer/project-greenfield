import { connect } from 'react-redux'
import ReviewList from '../components/ReviewList'
import reviewsLength from '../actions/reviewsLength.js'

const mapStateToProps = (store) => ({
    reviews: store.reviews,
    barFilter: store.reviewsChangeBarFilter,
    reviewsLength: store.reviewsLengthReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLengthChange: () => {
            dispatch(reviewsLength())
        }
    }
}

const ReviewListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewList)

export default ReviewListContainer