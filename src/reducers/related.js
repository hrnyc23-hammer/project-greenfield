import Redux from 'redux';

const relatedReducer = (state = [], action) => {
  switch(action.type) {
    case('CHANGE_RELATED'):
      return action.related;
    default:
      return state;
  }
};

export default relatedReducer
