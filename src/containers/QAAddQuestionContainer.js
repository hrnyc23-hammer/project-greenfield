import { connect } from "react-redux";
import QAAddQuestion from "./../components/QAAddQuestion";
import QAQuestionFlagClicked from "./../actions/QAQuestionFlagClicked";

var mapStateToProps = state => ({
  clickedFlag: state.qaQuestionClicked
});

var mapDispatchToProps = dispatch => ({
  QAQuestionFlagClicked: clicked => {
    dispatch(QAQuestionFlagClicked(clicked));
  }
});

var QAAddQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAddQuestion);

export default QAAddQuestionContainer;
