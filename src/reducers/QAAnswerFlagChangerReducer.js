import Redux from "redux";

var QAAnswerFlagChangerReducer = (state = false, action) => {
  switch (action.type) {
    case "QA_ANSWER_FLAG_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};

export default QAAnswerFlagChangerReducer;
