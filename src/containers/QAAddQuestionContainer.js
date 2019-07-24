import { connect } from "react-redux";
import QAAddQuestion from "./../components/QAAddQuestion";
import QAQuestionFlagClicked from "./../actions/QAQuestionFlagClicked";
import QAQuestionBody from "./../actions/QAQuestionBody";
import QAQuestionNickname from "./../actions/QAQuestionNickname";
import QAQuestionEmail from "./../actions/QAQuestionEmail";

var mapStateToProps = state => ({
  clickedFlag: state.qaQuestionClicked,
  body: state.qaQuestionBody,
  nickname: state.qaQuestionNickname,
  email: state.qaQuestionEmail,
  productId: state.meta.product_id
});

var mapDispatchToProps = dispatch => ({
  QAQuestionFlagClicked: clicked => {
    dispatch(QAQuestionFlagClicked(clicked));
  },
  QAQuestionBody: entry => {
    dispatch(QAQuestionBody(entry));
  },
  QAQuestionNickname: entry => {
    dispatch(QAQuestionNickname(entry));
  },
  QAQuestionEmail: entry => {
    dispatch(QAQuestionEmail(entry));
  }
});

var QAAddQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAddQuestion);

export default QAAddQuestionContainer;
