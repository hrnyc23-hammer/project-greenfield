import Axios from 'axios';
import changeRelated from './changeRelated.js';
const apiUrl = 'http://18.222.40.124/';

const fetchNewRelated = (relatedIds) => {
  return (dispatch) => {
    Promise.all(relatedIds.map((id) => {
      return Axios.get(`${apiUrl}products/${id}`)
      .then(({data}) => data);
    })).then((response) => {
      dispatch(changeRelated(response));
    }).catch(() => {
      console.error('Could not fetch related items');
    });
  }
};

export default fetchNewRelated;