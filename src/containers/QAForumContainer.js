import { connect } from "react-redux";
import QAForum from "./../components/QAForum.jsx";
import QAChangeResultsArr from "./../actions/QAChangeResultsArr";
import QAIncrementer from "./../actions/QAIncrementer";
import QASendDataToStore from "./../actions/QASendDataToStore";
import QAAddAnswers from "./../actions/QAAddAnswers";

var mapStateToProps = state => ({
  qa: state.qa,
  qaResultsArr: state.qaResultsArr,
  qaCount: state.qaIncrementer,
  qaAnswersArr: state.qaSendDataToStore
});

var mapDispatchToProps = dispatch => ({
  QAChangeResultsArr: entry => {
    dispatch(QAChangeResultsArr(entry));
  },
  QAIncrementer: entry => {
    dispatch(QAIncrementer(entry));
  },
  QASendDataToStore: entry => {
    dispatch(QASendDataToStore(entry));
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
