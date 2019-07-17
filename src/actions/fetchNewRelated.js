import Axios from 'axios';
import changeRelated from './changeRelated.js';
const apiUrl = 'http://18.222.40.124/';

const fetchNewRelated = (relatedIds) => {
  Promise.all(relatedIds.map((id) => {
    return Axios.get(`${apiUrl}product/${id}`)
  })).then(({data}) => {
    changeRelated(data);
  }).catch((err) => {
    console.error('Could not fetch related items');
  });
}