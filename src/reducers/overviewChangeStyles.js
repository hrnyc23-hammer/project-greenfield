import Redux from 'redux'

let overviewChangeStylesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_STYLES':
      return Object.assign({},state,action.styles);
    default:
    return state;
  }
};

export default overviewChangeStylesReducer;