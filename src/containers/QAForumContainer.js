import { connect } from "react-redux";
import QAForum from "./../components/QAForum.jsx";
import sample from "../data/sampleItemData.js";
import QAChangeResultsArr from "./../actions/QAChangeResultsArr";
import QAIncrementer from "./../actions/QAIncrementer";

var mapStateToProps = state => ({
  qa: state.qa,
  qaResultsArr: state.qaResultsArr,
  qaCount: state.qaIncrementer,
  qaAnswersArr: state.qaAnswersArr
});

var mapDispatchToProps = dispatch => ({
  QAChangeResultsArr: entry => {
    dispatch(QAChangeResultsArr(entry));
  },
  QAIncrementer: entry => {
    dispatch(QAIncrementer(entry));
  }
});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
