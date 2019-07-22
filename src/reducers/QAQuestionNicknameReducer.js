import Redux from "redux";

var QAQuestionNicknameReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_QUESTION_NICKNAME":
      return action.entry;
    default:
      return state;
  }
};

export default QAQuestionNicknameReducer;
