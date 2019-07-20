import { connect } from 'react-redux';
import Outfits from '../components/Outfits';
import addToOutfits from '../actions/addToOutfits';
import removeFromOutfits from '../actions/removeFromOutfits';

const mapStateToProps = (store) => ({
  info: store.overviewProductInfo,
  styles: store.overviewChangeStyles,
  meta: store.meta,
  outfits: store.outfits
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToOutfits: (outfit)  => {
      dispatch(addToOutfits(outfit))
    },
    removeFromOutfits: (outfit) => {
      dispatch(removeFromOutfits(outfit))
    }
  }
}

const OutfitsContainer = connect(mapStateToProps, mapDispatchToProps)(Outfits);

export default OutfitsContainer;

