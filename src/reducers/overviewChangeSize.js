import Redux from 'redux'

let overviewChangeSizeReducer = (state = 'poop', action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_SIZE':
      return action.size;
    default:
    return state;
  }
};

export default overviewChangeSizeReducer;