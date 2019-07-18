import { connect } from "react-redux";
import QA from "./../components/QA.jsx";

var mapStateToProps = state => ({
  qa: state.qa,
  // initialState: state
  QASearchEntry: state.qaSearchEntry
});

var mapDispatchToProps = dispatch => ({});

var QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QA);

export default QAContainer;