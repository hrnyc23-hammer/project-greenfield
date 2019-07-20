import Redux from "redux";

var QAChangeResultsArrReducer = (state = [], action) => {
  let temp;
  let questions;
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      temp = JSON.parse(JSON.stringify(state[action.entry]));
      temp.answerLimit = 2;
      return [...state, temp];
    case "ADD_ANSWERS":
      questions = [...state];
      questions[action.index].answerLimit += 2;

      return questions;
    default:
      if (state.length > 0 && state[0].answerLimit === undefined) {
        return state.map(ele => {
          ele.answerLimit = 2;
          return ele;
        });
      } else {
        return state;
      }
  }
};

export default QAChangeResultsArrReducer;
