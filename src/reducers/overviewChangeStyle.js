import Redux from 'redux'

let overviewChangeStyleReducer = (state = null, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_STYLE':
      return action.payload;
    default:
    return state;
  }
};

export default overviewChangeStyleReducer