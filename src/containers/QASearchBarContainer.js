import { connect } from "react-redux";
import QASearchBar from "./../components/QASearchBar";
import QAHandleSearchEntry from "./../actions/QAHandleSearchEntry";
import QAFilterResultsArr from "./../actions/QAFilterResultsArr";

var mapStateToProps = state => ({
  qaSearchEntry: state.qaSearchEntry
});

var mapDispatchToProps = dispatch => ({
  QAHandleSearchEntry: entry => {
    dispatch(QAHandleSearchEntry(entry));
  },
  QAFilterResultsArr: entry => {
    dispatch(QAFilterResultsArr(entry));
  }
});

var QASearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QASearchBar);

export default QASearchBarContainer;
