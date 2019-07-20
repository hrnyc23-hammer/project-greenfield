import { connect } from 'react-redux'
import Overview from '../components/Overview'
import changeSelectedStyle from '../actions/changeSelectedStyle.js'
import changeSize from '../actions/changeSize.js'

const mapStateToProps = (store) => ({
  info : store.overviewProductInfo,
  styles : store.overviewChangeStyles,
  selectedStyle : store.overviewChangeSelectedStyles,
  meta: store.meta,
  size :store.overviewChangeSize
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedStyle : selectedStyle => {
      dispatch(changeSelectedStyle(selectedStyle))
    },
    handleSelectedSize : selectedSize => {
      dispatch(changeSize(selectedSize))
    }
  }
}

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview)

export default OverviewContainer