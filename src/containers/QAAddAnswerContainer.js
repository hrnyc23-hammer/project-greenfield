import { connect } from "react-redux";
import QAAddAnswer from "./../components/QAAddAnswer";
import QAAnswerFlagClicked from "./../actions/QAAnswerFlagClicked";
import QAAnswerNickname from "./../actions/QAAnswerNickname";
import QAAnswerEmail from "./../actions/QAAddEmail";
import QAAddAnswerBody from "./../actions/QAAddAnswerBody";
import QAAddPhotos from "./../actions/QAAddPhotos";
import QAUrl from "./../actions/QAUrl";

var mapStateToProps = state => ({
  clickedFlag: state.qaAnswerClicked,
  nickname: state.qaAnswerNickname,
  email: state.qaAnswerEmail,
  answerBody: state.qaAnswerBody,
  url: state.qaUrl,
  photoUrl: state.qaAddPhotos,
  qaResultsArr: state.qaResultsArr
});

var mapDispatchToProps = dispatch => ({
  QAAnswerFlagClicked: clicked => {
    dispatch(QAAnswerFlagClicked(clicked));
  },
  QAAnswerNickname: entry => {
    dispatch(QAAnswerNickname(entry));
  },
  QAAnswerEmail: entry => {
    dispatch(QAAnswerEmail(entry));
  },
  QAAddAnswerBody: entry => {
    dispatch(QAAddAnswerBody(entry));
  },
  QAUrl: url => {
    dispatch(QAUrl(url));
  },
  QAAddPhotos: url => {
    dispatch(QAAddPhotos(url));
  }
});

var QAAddAnswerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAAddAnswer);

export default QAAddAnswerContainer;
