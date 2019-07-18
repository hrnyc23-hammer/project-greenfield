import Redux from "redux";
import { qa } from '../data/sampleItemData.js';

var QAAddAnswerReducer = (state = qa.results.slice(0, 2), action) => {
  switch (action.type) {
    case "ADD_ANSWERS":
      let copy = JSON.parse(JSON.stringify(state));
      copy[action.index].answerLimit = Math.min(copy[action.index].answerLimit + 2, Object.keys(state[action.index]).length);
      return copy;
    default:
      if (state[0].answerLimit === undefined) {
        return state.map((ele) => {
          ele.answerLimit = 2;
          return ele;
        });
      } else {
        return state;
      }
  }
};

export default QAAddAnswerReducer;