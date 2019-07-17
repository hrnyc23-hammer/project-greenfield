import { connect } from "react-redux";
import QAForum from "./../components/QAForum.jsx";
import sample from "../data/sampleItemData.js";
import QAHandleMoreQuestionsButton from "./../actions/QAHandleMoreQuestionsButton";

var mapStateToProps = state => ({
  qa: state.qa,
  qaResultsArr: sample.qa.results
});

var mapDispatchToProps = dispatch => ({
  QAHandleMoreQuestionsButton: entry => {
    dispatch(QAHandleMoreQuestionsButton(entry));
  }
});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
