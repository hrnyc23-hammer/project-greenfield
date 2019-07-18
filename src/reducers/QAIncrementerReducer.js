import Redux from "redux";

var QAIncrementerReducer = (state = 2, action) => {
  // let currentState = state;
  switch (action.type) {
    case "QA_INCREMENT_BY_ENTRY":
      // return Object.assign({}, state, action.entry);
      return state + action.entry;
    default:
      return state;
  }
};

export default QAIncrementerReducer;
