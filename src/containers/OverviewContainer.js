import { connect } from 'react-redux'
import Overview from '../components/Overview.jsx'

const mapStateToProps = (store) => ({
  info : store.overviewProductInfo,
  styles : store.overviewChangeStyles,
  selectedStyle : store.overviewChangeSelectedStyles
})

const OverviewContainer = connect(mapStateToProps)(Overview)

export default OverviewContainer