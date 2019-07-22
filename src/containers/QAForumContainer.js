import { connect } from "react-redux";
import QAForum from "./../components/QAForum";
import QAChangeResultsArr from "./../actions/QAChangeResultsArr";
import QAIncrementer from "./../actions/QAIncrementer";
import QAAddAnswers from "./../actions/QAAddAnswers";

var mapStateToProps = state => ({
  qa: state.qa,
  qaResultsArr: state.qaResultsArr,
  qaCount: state.qaIncrementer,
  qaSearchEntry: state.qaSearchEntry
});

var mapDispatchToProps = dispatch => ({
  QAChangeResultsArr: entry => {
    dispatch(QAChangeResultsArr(entry));
  },
  QAIncrementer: entry => {
    dispatch(QAIncrementer(entry));
  },
  QAAddAnswers: index => {
    dispatch(QAAddAnswers(index));
  }
});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
