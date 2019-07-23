const apiUrl = 'http://18.222.40.124';
const Axios = require('axios');

module.exports = {
  getProductInfo: (productId) => {
    return Axios.get(`${apiUrl}/products/${productId}`);
  },

  getStyles: (productId) => {
    return Axios.get(`${apiUrl}/products/${productId}/styles`);
  },

  getRelated: (productId) => {
    return Axios.get(`${apiUrl}/products/${productId}/related`);
  },

  getQA: (productId) => {
    return Axios.get(`${apiUrl}/qa/${productId}`);
  },

  getReviews: (productId) => {
    return Axios.get(`${apiUrl}/reviews/${productId}/list?count=4`);
  },

  getMeta: (productId) => {
    return Axios.get(`${apiUrl}/reviews/${productId}/meta`);
  },
  putReport: (reviewId) => {
    return Axios.put(`${apiUrl}/reviews/report/${reviewId}`)
  },
  getSortedReviews: (productId, sort, page) => {
    return Axios.get(`${apiUrl}/reviews/${productId}/list?count=4&sort=${sort}&page=${page}`)
  },
  putHelpful: (reviewId) => {
    return Axios.put(`${apiUrl}/reviews/helpful/${reviewId}`)
  },
  postReview: (productId, rating, summary, body, recommend, name, email, photos) => {
    return Axios.post(`${apiUrl}/reviews/${productId}`, {
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos
    })
  }
}