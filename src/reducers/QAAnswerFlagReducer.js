import Redux from "redux";

var QAAnswerFlagReducer = (state = false, action) => {
  switch (action.type) {
    case "QA_ANSWER_FLAG_CHANGE":
      return action.clicked;
    default:
      return state;
  }
};

export default QAAnswerFlagReducer;
