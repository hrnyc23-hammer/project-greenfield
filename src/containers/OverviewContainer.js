import { connect } from 'react-redux'
import Overview from '../components/Overview.jsx'

const mapStateToProps = (store) => ({
  info : store.info,
  styles : store.styles
})

const OverviewContainer = connect(mapStateToProps)(Overview)

export default OverviewContainer