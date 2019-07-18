import { connect } from 'react-redux'
import ReviewsBars from '../components/ReviewsBars.jsx'

const mapStateToProps = (store) => ({
    meta: store.meta
})

const ReviewsBarsContainer = connect(
    mapStateToProps
)(ReviewsBars)

export default ReviewsBarsContainer