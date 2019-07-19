import Axios from 'axios';
import changeRelated from './changeRelated.js';
const apiUrl = 'http://18.222.40.124/';

const fetchNewRelated = (relatedIds) => {
  return (dispatch) => {
    Promise.all(relatedIds.map((id) => {
      return Axios.get(`${apiUrl}products/${id}`)
      .then((idResponse) => {
        let relatedResult = {
          info: idResponse.data
        };
        return Axios.get((`${apiUrl}products/${id}/styles`))
        .then((styleResponse) => {
          let styleResult = {
            styles: styleResponse.data.results
          };
          return Axios.get((`${apiUrl}reviews/${id}/meta`))
          .then((metaResponse) => {
            let metaResult = {
              meta: metaResponse.data
            };
            return Object.assign({}, relatedResult, styleResult, metaResult);
          });
        })
      });
    })).then((response) => {
      dispatch(changeRelated(response));
    }).catch(() => {
      console.error('Could not fetch related items');
    });
  }
};

export default fetchNewRelated;