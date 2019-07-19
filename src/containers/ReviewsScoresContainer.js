import { connect } from 'react-redux'
import ReviewsScores from '../components/ReviewsScores.jsx'

const mapStateToProps = (store) => ({
    meta: store.meta
})

const ReviewsScoresContainer = connect(
    mapStateToProps
)(ReviewsScores)

export default ReviewsScoresContainer