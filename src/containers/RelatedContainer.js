import { connect } from 'react-redux';
import Related from '../components/Related';
import fetchNewRelated from '../actions/fetchNewRelated';
import fetchRelatedIds from '../actions/fetchRelatedIds'

const mapStateToProps = (store) => {
  return ({
  related: store.related,
  info: store.overviewProductInfo,
})};

const mapDispatchToProps = (dispatch) => {
  return {
    load: (ids) => {
      dispatch(fetchNewRelated(ids));
    },
    fetchRelatedIds: (id) => {
      dispatch(fetchRelatedIds(id));
    }
  }
};

const RelatedContainer = connect(mapStateToProps, mapDispatchToProps)(Related);

export default RelatedContainer;