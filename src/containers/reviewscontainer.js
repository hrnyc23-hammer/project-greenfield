import { connect } from 'react-redux'
import Reviews from '../components/reviews.jsx'

const mapStateToProps = (store) => ({
    reviews: store.reviews,
    meta: store.meta
})

const ReviewsContainer = connect(
    mapStateToProps
)(Reviews)

export default ReviewsContainer