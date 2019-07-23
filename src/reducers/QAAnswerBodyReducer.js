import Redux from "redux";

var QAAnswerBodyReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_ADD_ANSWER_BODY":
      return action.entry;
    default:
      return state;
  }
};

export default QAAnswerBodyReducer;
