import { connect } from "react-redux";
<<<<<<< HEAD
import QASearchBar from "./../components/QASearchBar";
=======
import QASearchBar from "./../components/QASearchBar.jsx";
>>>>>>> 8f6e556aa63390bf7063a08d30f24bc53ad790d0
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
