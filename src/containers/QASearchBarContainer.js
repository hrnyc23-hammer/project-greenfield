import { connect } from "react-redux";
import QASearchBar from "./../components/QASearchBar.jsx";
import sample from "../data/sampleItemData.js";
import QAHandleSearchEntry from "./../actions/QAHandleSearchEntry";

var mapStateToProps = state => ({
  qa: state.qa,
  QASearchEntry: state.QASearchEntry
});

var mapDispatchToProps = dispatch => ({
  QAHandleSearchEntry: entry => {
    dispatch(QAHandleSearchEntry(entry));
  }
});

var QASearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QASearchBar);

export default QASearchBarContainer;