import { connect } from "react-redux";
import QAAddAQuestion from "./../components/QAAddAQuestion";
import QAAddAQuestionClicked from "./../actions/QAAddAQuestionClicked";
import QAQuestionNickname from "./../actions/QAQuestionNickname";
import QAQuestionEmail from "./../actions/QAAddEmail";
import QAAddQuestionBody from "./../actions/QAAddQuestionBody";
import QAAddPhotos from "./../actions/QAAddPhotos";
import QAUrl from "./../actions/QAUrl";

var mapStateToProps = state => ({
  clickedFlag: state.qaQuestionClicked,
  nickname: state.qaQuestionNickname,
  email: state.qaQuestionEmail,
  questionBody: state.qaQuestionBody,
  url: state.qaUrl,
  photoUrl: state.qaAddPhotos
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
  },
  QAUrl: url => {
    dispatch(QAUrl(url));
  },
  QAAddPhotos: url => {
    dispatch(QAAddPhotos(url));
  }
});

var QAAddAQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAddAQuestion);

export default QAAddAQuestionContainer;
