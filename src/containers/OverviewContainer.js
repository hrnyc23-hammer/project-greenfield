import { connect } from 'react-redux'
import Overview from '../components/Overview.jsx'
import changeSelectedStyle from '../actions/changeSelectedStyle.js'

const mapStateToProps = (store) => ({
  info : store.overviewProductInfo,
  styles : store.overviewChangeStyles,
  selectedStyle : store.overviewChangeSelectedStyles
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedStyle : selectedStyle => {
      dispatch(changeSelectedStyle(selectedStyle))
    }
  }
}

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview)

export default OverviewContainer