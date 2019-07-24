import { getRelated } from '../infoFetchers';
import changeRelated from './changeRelated';

const fetchRelatedIds = (id) => {
  return (dispatch) => {
    getRelated(id).then(({ data }) => {
      dispatch(changeRelated([...new Set(data)]))
    })
    .catch(() => {
      console.error('Could not fetch related items');
    })
  }
};

export default fetchRelatedIds;