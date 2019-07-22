import Redux from "redux";

var qaReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_QA":
      return action.qa;
    default:
      state.qaLength = state
      return state;
  }
};

export default qaReducer;
