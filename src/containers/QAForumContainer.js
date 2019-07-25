import { connect } from "react-redux";
import QAForum from "./../components/QAForum";
import QAChangeResultsArr from "./../actions/QAChangeResultsArr";
import QAIncrementer from "./../actions/QAIncrementer";
import QAAddAnswers from "./../actions/QAAddAnswers";
import QAImageClicked from "./../actions/QAImageClicked";
import QAClickedImageUrl from "./../actions/QAClickedImageUrl";
import QAAnswerFlagClicked from "./../actions/QAAnswerFlagClicked";
import QACurrentQuestion from "./../actions/QACurrentQuestion";
import QAQuestionFlagClicked from "./../actions/QAQuestionFlagClicked";
import QAResetResultsArray from "./../actions/QAResetResultsArray";

var mapStateToProps = state => ({
  qaResultsArr: state.qaResultsArr,
  qaCount: state.qaIncrementer,
  qaSearchEntry: state.qaSearchEntry,
  qaImageClicked: state.qaImageClicked,
  qaImageUrl: state.qaImageUrl,
  answerClickedFlag: state.qaAnswerClicked,
  questionClickedFlag: state.qaQuestionClicked,
  productId: state.meta.product_id
});

var mapDispatchToProps = dispatch => ({
  QAChangeResultsArr: entry => {
    dispatch(QAChangeResultsArr(entry));
  },
  QAIncrementer: entry => {
    dispatch(QAIncrementer(entry));
  },
  QAAddAnswers: index => {
    dispatch(QAAddAnswers(index));
  },
  QAImageClicked: clicked => {
    dispatch(QAImageClicked(clicked));
  },
  QAClickedImageUrl: clicked => {
    dispatch(QAClickedImageUrl(clicked));
  },
  QAAnswerFlagClicked: clicked => {
    dispatch(QAAnswerFlagClicked(clicked));
  },
  QACurrentQuestion: id => {
    dispatch(QACurrentQuestion(id));
  },
  QAQuestionFlagClicked: clicked => {
    dispatch(QAQuestionFlagClicked(clicked));
  },
  QAResetResultsArray: array => {
    dispatch(QAResetResultsArray(array));
  }
});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
