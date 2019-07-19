import { connect } from "react-redux";
import QAForum from "./../components/QAForum";
import sample from "../data/sampleItemData";

var mapStateToProps = state => ({
  qa: state.qa,
  qaResultsArr: state.qa.results
});

var mapDispatchToProps = dispatch => ({});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
