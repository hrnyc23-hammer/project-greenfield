import Axios from 'axios';
import changeRelated from './changeRelated.js';
import { getProductInfo, getStyles, getMeta } from '../infoFetchers';

const fetchNewRelated = (relatedIds) => {
  return (dispatch) => {
    Promise.all(relatedIds.map((id) => {
      return Axios.all([getProductInfo(id), getStyles(id), getMeta(id)])
      .then(Axios.spread((infoResponse, stylesResponse, metaResponse) => {
        return {
          info: infoResponse.data,
          styles: stylesResponse.data.results,
          meta: metaResponse.data
        }
      }))
    })).then((response) => {
      dispatch(changeRelated(response));
    }).catch(() => {
      console.error('Could not fetch related items');
    });
  }
};

export default fetchNewRelated;