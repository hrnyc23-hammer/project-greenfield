import { connect } from 'react-redux';
import Outfits from '../components/Outfits';
import addToOutfits from '../actions/addToOutfits';

const mapStateToProps = (store) => ({
  info: store.overviewProductInfo,
  outfits: store.outfits
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToOutfits: (outfit)  => {
      dispatch(addToOutfits(outfit))
    }
  }
}

const OutfitsContainer = connect(mapStateToProps, mapDispatchToProps)(Outfits);

export default OutfitsContainer;

