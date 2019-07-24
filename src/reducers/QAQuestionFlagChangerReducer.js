import Redux from "redux";

var QAQuestionFlagChangerReducer = (state = false, action) => {
  switch (action.type) {
    case "QA_QUESTION_FLAG_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};

export default QAQuestionFlagChangerReducer;
