import Redux from "redux";
import store from "./../store/store";

var HandleMoreQuestionsButtonReducer = (state = 0, action) => {
  switch (action.type) {
    case "SHOW_MORE_QUESTIONS":
      return state + action.show;
    default:
      return state;
  }
};





export default HandleMoreQuestionsButtonReducer;