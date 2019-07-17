import { connect } from 'react-redux';
import Related from '../components/Related.jsx';
import fetchNewProduct from '../actions/fetchNewProduct';

const mapStateToProps = (store) => ({related: store.related});

const mapDispatchToProps = (dispatch) => {
  return {
    handleRelatedClick: (id) => {
      dispatch(fetchNewProduct(id));
    }
  }
};

const RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(Related);

export default RelatedContainer;