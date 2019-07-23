import Redux from "redux";

var QAAnswerEmailReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_ANSWER_EMAIL":
      return action.entry;
    default:
      return state;
  }
};

export default QAAnswerEmailReducer;
