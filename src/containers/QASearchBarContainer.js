import { connect } from "react-redux";
import QASearchBar from "./../components/QASearchBar";
import QAHandleSearchEntry from "./../actions/QAHandleSearchEntry";
import QAFilterResultsArr from "./../actions/QAFilterResultsArr";

var mapStateToProps = state => ({
  qa: state.qa,
  qaSearchEntry: state.QASearchEntry
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
