import Redux from "redux";

var QAAddPhotosReducer = (state = [], action) => {
  switch (action.type) {
    case "QA_ADD_PHOTOS":
      return [...state, action.url];
    default:
      return state;
  }
};

export default QAAddPhotosReducer;
