import Redux from "redux";

var QAIncrementerReducer = (state = 2, action) => {
  // let currentState = state;
  switch (action.type) {
    case "QA_INCREMENT_BY_ENTRY":
      return state + action.entry;
    default:
      return state;
  }
};

export default QAIncrementerReducer;
