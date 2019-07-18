import Redux from "redux";
import { qa } from "../data/sampleItemData.js";

var QAChangeResultsArrReducer = (state = qa.results.slice(0, 2), action) => {
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      let temp = JSON.parse(JSON.stringify(qa.results[action.entry]));
      temp.answerLimit = 2;
      return [...state, temp];
    case "ADD_ANSWERS":
      let temp2 = [...state];
      temp2[action.index].answerLimit = Math.min(Object.keys(temp2[action.index].answers).length, temp2[action.index].answerLimit + 2);
      return temp2;
    default:
      if (state[0].answerLimit === undefined) {
        return state.map((ele) => {
          ele.answerLimit = 2;
          return ele;
        })
      } else {
        return state;
      }
  }
};

export default QAChangeResultsArrReducer;
