import { connect } from "react-redux";
import QAForum from "./../components/QAForum";
import QAChangeResultsArr from "./../actions/QAChangeResultsArr";
import QAIncrementer from "./../actions/QAIncrementer";
import QAAddAnswers from "./../actions/QAAddAnswers";
import QAImageClicked from "./../actions/QAImageClicked";
import QAClickedImageUrl from "./../actions/QAClickedImageUrl";
import QAAnswerFlagChanger from "./../actions/QAAnswerFlag";

var mapStateToProps = state => ({
  qaResultsArr: state.qaResultsArr,
  qaCount: state.qaIncrementer,
  qaSearchEntry: state.qaSearchEntry,
  qaImageClicked: state.qaImageClicked,
  qaImageUrl: state.qaImageUrl,
  qaAnswerFlag: state.qaAnswerFlag
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
  QAAnswerFlagChanger: clicked => {
    dispatch(QAAnswerFlagChanger(clicked));
  }
});

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
