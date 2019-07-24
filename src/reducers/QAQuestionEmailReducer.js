import Redux from "redux";

var QAQuestionEmailReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_QUESTION_EMAIL":
      return action.entry;
    default:
      return state;
  }
};

export default QAQuestionEmailReducer;
