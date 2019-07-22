import Redux from "redux";

var QAUrlReducer = (state = "", action) => {
  switch (action.type) {
    case "QA_URL_ENTRY":
      return action.entry;
    default:
      return state;
  }
};

export default QAUrlReducer;
