import Redux from 'redux';

let overviewChangeSelectedStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_SELECTED_STYLE':
      return Object.assign({},state,action.selectedStyle);
    default:
    return state;
  }
};

export default overviewChangeSelectedStyleReducer;