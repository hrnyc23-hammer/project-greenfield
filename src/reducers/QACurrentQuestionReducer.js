import Redux from "redux";

var QACurrentQuestionReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_CURRENT_QUESTION_CLICKED":
      return action.id;
    default:
      return state;
  }
};

export default QACurrentQuestionReducer;
