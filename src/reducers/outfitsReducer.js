import Redux from 'redux';

var outfitsReducer = (state = {}, action) => {
  let obj;
  switch (action.type) {
      case 'ADD_TO_OUTFITS':
        return Object.assign({}, state, action.outfits);
      case 'REMOVE_FROM_OUTFITS':
        obj = Object.assign({}, state);
        delete obj[action.outfitId];
        return Object.assign({}, obj);
      default:
        return state;
    }
};

export default outfitsReducer;