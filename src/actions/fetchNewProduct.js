import changeInfo from './changeInfo.js';
import changeStyles from './changeStyles.js';
import changeRelated from './changeRelated.js';
import changeQA from './changeQA.js';
import changeReviews from './changeReviews.js';
import changeMeta from './changeMeta.js';

import Axios from 'axios';

const fetchNewProduct = (id) => {
  Axios.get(`/store/${id}`)
  .then(({data}) => {
    let {info, styles, related, qa, reviews, meta} = data;
    changeInfo(info);
    changeStyles(styles);
    changeRelated(related);
    changeQA(qa);
    changeReviews(reviews);
    changeMeta(meta);
  })
  .catch(() => console.error(`Could not fetch product with id: ${id}`));
};

export default fetchNewProduct;