import Redux from "redux";


var QAHandleSearchEntryReducer = (state = '', action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_ENTRY":
      return action.entry;
    default:
      return state;
  }
};





export default QAHandleSearchEntryReducer;