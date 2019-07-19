import { connect } from 'react-redux';
import Related from '../components/Related';
import fetchNewProduct from '../actions/fetchNewProduct';
import fetchNewRelated from '../actions/fetchNewRelated';

const mapStateToProps = (store) => ({related: store.related});

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