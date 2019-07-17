import { connect } from 'react-redux'
import ReviewsStars from '../components/ReviewsStars.jsx'

const mapStateToProps = (store) => ({
    meta: store.meta
})

const ReviewsStarsContainer = connect(
    mapStateToProps
)(ReviewsStars)

export default ReviewsStarsContainer