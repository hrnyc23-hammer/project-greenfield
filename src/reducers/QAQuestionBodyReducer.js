import Redux from "redux";

var QAQuestionBodyReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_ADD_QUESTION_BODY":
      return action.entry;
    default:
      return state;
  }
};

export default QAQuestionBodyReducer;
