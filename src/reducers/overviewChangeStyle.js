import Redux from 'redux'

let overviewChangeStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_STYLE':
      return Object.assign(state,action.selectedStyle);
    default:
    return state;
  }
};

export default overviewChangeStyleReducer