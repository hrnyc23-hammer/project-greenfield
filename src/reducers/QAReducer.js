import Redux from 'redux';


var qaReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_QA':
    return action.qa;
  default:
    return state;
  }
};

export default qaReducer;