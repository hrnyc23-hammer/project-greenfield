import Redux from 'redux';

/* outfitsReducer triggers a change in state which is caught by
 * the component, causing it to rerender. Since we capture the outfits
 * directly in store, we do not need to preserve that memory here.
 * This function ensures that any aciton to the outfits will cause a
 * change in state.
*/

var outfitsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_TO_OUTFITS':
        return action.outfit;
      case 'REMOVE_FROM_OUTFITS':
        return action.outfit;
      default:
        return state;
    }
};

export default outfitsReducer;