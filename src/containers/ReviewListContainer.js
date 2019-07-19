import { connect } from 'react-redux'
import ReviewList from '../components/ReviewList'

const mapStateToProps = (store) => ({
    reviews: store.reviews,
    barFilter: store.reviewsChangeBarFilter
})

const ReviewListContainer = connect(
    mapStateToProps
)(ReviewList)

export default ReviewListContainer