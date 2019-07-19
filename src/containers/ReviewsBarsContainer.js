import { connect } from 'react-redux'
import ReviewsBars from '../components/ReviewsBars.jsx'
import reviewsChangeBarFilter from '../actions/reviewsChangeBarFilter.js'
import reviewsResetBarFilter from '../actions/reviewsResetBarFilter'

const mapStateToProps = (store) => ({
    meta: store.meta,
    barFilter: store.reviewsChangeBarFilter
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleBarFilterChange: (filter) => {
            dispatch(reviewsChangeBarFilter(filter))
        },
        handleBarFilterReset: () => {
            dispatch(reviewsResetBarFilter())
        }
    }
}

const ReviewsBarsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsBars)

export default ReviewsBarsContainer