import { connect } from "react-redux";
import QASearchBar from "./../components/QASearchBar";
import QAHandleSearchEntry from "./../actions/QAHandleSearchEntry";
import QAFilterResultsArr from "./../actions/QAFilterResultsArr";
import QAResetResultsArray from "./../actions/QAResetResultsArray";
import QAIncrementer from "./../actions/QAIncrementer";

var mapStateToProps = state => ({
  qaSearchEntry: state.qaSearchEntry,
  productId: state.meta.product_id,
  
  qaCount: state.qaIncrementer
});

var mapDispatchToProps = dispatch => ({
  QAHandleSearchEntry: entry => {
    dispatch(QAHandleSearchEntry(entry));
  },
  QAFilterResultsArr: entry => {
    dispatch(QAFilterResultsArr(entry));
  },
  
  QAResetResultsArray: array => {
    dispatch(QAResetResultsArray(array));
  },
  QAIncrementer: entry => {
    dispatch(QAIncrementer(entry));
  }
});

var QASearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QASearchBar);

export default QASearchBarContainer;
