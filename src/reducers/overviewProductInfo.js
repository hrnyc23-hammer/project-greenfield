import Redux from 'redux'

let overviewChangeProductInfo = (state = {}, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_INFO':
      return Object.assign({},state,action.product);
    default:
    return state;
  }
};

export default overviewChangeProductInfo;