import Redux from "redux";

var QASendDataToStoreReducer = (state = [], action) => {
  switch (action.type) {
    case "QA_SEND_DATA":
      // return Object.assign({}, state, action.entry);
      return [...state, action.entry];
    default:
      return state;
  }
};

export default QASendDataToStoreReducer;
