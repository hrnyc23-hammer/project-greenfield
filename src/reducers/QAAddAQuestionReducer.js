import Redux from "redux";

var QAAddAQuestionReducer = (state = false, action) => {
  // let currentState = state;
  switch (action.type) {
    case  "QA_ADD_QUESTION_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};

export default QAAddAQuestionReducer;
