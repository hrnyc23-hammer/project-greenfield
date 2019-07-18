import { connect } from 'react-redux';
import Related from '../components/Related.jsx';
import fetchNewProduct from '../actions/fetchNewProduct';
import fetchNewRelated from '../actions/fetchNewRelated.js';

const mapStateToProps = (store) => {
  return ({
  related: store.related,
  info: store.overviewProductInfo,
})};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRelatedClick: (id) => {
      dispatch(fetchNewProduct(id));
    },
    load: (ids) => {
      dispatch(fetchNewRelated(ids));
    }
  }
};

const RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(Related);

export default RelatedContainer;