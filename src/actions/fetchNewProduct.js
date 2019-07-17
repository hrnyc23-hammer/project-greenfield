import changeInfo from './changeInfo.js';
import changeStyles from './changeStyles.js';
import fetchNewRelated from './fetchNewRelated.js';
import changeQA from './changeQA.js';
import changeReviews from './changeReviews.js';
import changeMeta from './changeMeta.js';

import Axios from 'axios';

const fetchNewProduct = (id) => {
  return dispatch => {
    Axios.get(`/store/${id}`)
      .then(({ data }) => {
        let { info, styles, related, qa, reviews, meta } = data;
        dispatch(changeInfo(info));
        dispatch(changeStyles(styles));
        dispatch(fetchNewRelated(related));
        dispatch(changeQA(qa));
        dispatch(changeReviews(reviews));
        dispatch(changeMeta(meta));
      })
      .catch(() => console.error(`Could not fetch product with id: ${id}`));
  };
};

export default fetchNewProduct;