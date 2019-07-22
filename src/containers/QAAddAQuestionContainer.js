import { connect } from "react-redux";
import QAAddAQuestion from "./../components/QAAddAQuestion";
import QAAddAQuestionClicked from "./../actions/QAAddAQuestionClicked";
import QAQuestionNickname from "./../actions/QAQuestionNickname";
import QAQuestionEmail from "./../actions/QAAddEmail";
import QAAddQuestionBody from "./../actions/QAAddQuestionBody";

var mapStateToProps = state => ({
  clickedFlag: state.qaQuestionClicked,
  nickname: state.qaQuestionNickname,
  email: state.qaQuestionEmail,
  questionBody: state.qaQuestionBody
});

var mapDispatchToProps = dispatch => ({
  QAAddAQuestionClicked: clicked => {
    dispatch(QAAddAQuestionClicked(clicked));
  },
  QAQuestionNickname: entry => {
    dispatch(QAQuestionNickname(entry));
  },
  QAQuestionEmail: entry => {
    dispatch(QAQuestionEmail(entry));
  },
  QAAddQuestionBody: entry => {
    dispatch(QAAddQuestionBody(entry));
  }
});

var QAAddAQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAddAQuestion);

export default QAAddAQuestionContainer;
