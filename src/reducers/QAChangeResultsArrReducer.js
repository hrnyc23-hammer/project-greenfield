import Redux from "redux";
import { qa } from "../data/sampleItemData.js";

var QAChangeResultsArrReducer = (state = qa.results.slice(0, 2), action) => {
  // let currentState = state;
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      // return Object.assign({}, state, action.entry);
      return [...state, qa.results[action.entry]];
    default:
      return state;
  }
};

export default QAChangeResultsArrReducer;
