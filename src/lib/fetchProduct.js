import Axios from 'axios';

const fetchProduct = (id) => {
  return Axios.get(`store/${id}`);
}