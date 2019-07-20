import { connect } from "react-redux";
import QAAnswers from "./../components/QAAnswers";


var mapStateToProps = state => ({
  qa: state.qa,
  QASearchEntry: state.QASearchEntry
});

var mapDispatchToProps = dispatch => ({});

var QAAnswersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAnswers);

export default QAAnswersContainer;
