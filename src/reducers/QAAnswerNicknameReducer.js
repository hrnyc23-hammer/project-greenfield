import Redux from "redux";

var QAAnswerNicknameReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_ANSWER_NICKNAME":
      return action.entry;
    default:
      return state;
  }
};

export default QAAnswerNicknameReducer;
