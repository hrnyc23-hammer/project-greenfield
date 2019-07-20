import Redux from "redux";
import { qa } from "../data/sampleItemData.js";

var QAChangeResultsArrReducer = (state = qa.results.slice(0, 2), action) => {
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      let temp = JSON.parse(JSON.stringify(qa.results[action.entry]));
      temp.answerLimit = 2;
      return [...state, temp];
    case "ADD_ANSWERS":
      let questions = [...state];

      questions[action.index].answerLimit += 2;

      return questions;
    //TODO:
    case "QA_FILTER_ARR":
      let filteredQuestions = [...state];
      let filteredArr = filteredQuestions.filter((name, i) =>
        name.question_body.includes(action.entry)
      );

      return filteredArr;
    default:
      if (state[0].answerLimit === undefined) {
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
