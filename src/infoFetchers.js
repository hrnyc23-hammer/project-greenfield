const apiUrl = "http://13.58.161.60";
const productsUrl = "http://18.218.140.241";
const qaUrl = "http://54.172.1.169";
const reviewsUrl = "http://3.89.227.84";
const Axios = require("axios");

module.exports = {
  getProductInfo: productId => {
    return Axios.get(`${productsUrl}/products/${productId}`);
  },

  getStyles: productId => {
    return Axios.get(`${productsUrl}/products/${productId}/styles`);
  },

  // getRelated: productId => {
  //   return Axios.get(`${apiUrl}/products/${productId}/related`);
  // },

  getQA: productId => {
    return Axios.get(`${qaUrl}/qa/${productId}`);
  },

  getReviews: productId => {
    return Axios.get(`${reviewsUrl}/reviews/${productId}/list?count=4`);
  },

  getMeta: productId => {
    return Axios.get(`${reviewsUrl}/reviews/${productId}/meta`);
  },
  putReport: reviewId => {
    return Axios.put(`${reviewsUrl}/reviews/report/${reviewId}`);
  },
  getSortedReviews: (productId, sort, page) => {
    return Axios.get(
      `${reviewsUrl}/reviews/${productId}/list?count=4&sort=${sort}&page=${page}`
    );
  },
  putHelpful: reviewId => {
    return Axios.put(`${reviewsUrl}/reviews/helpful/${reviewId}`);
  },
  postReview: (productId, rating, summary, body, recommend, name, email, photos, characteristics) => {
    return Axios.post(`${reviewsUrl}/reviews/${productId}`, {
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    });
  },
  postAnswer: (questionId, body, name, email, photos) => {
    return Axios.post(`${qaUrl}/qa/${questionId}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos
    });
  },
  putAnswerReport: answerId => {
    return Axios.put(`${qaUrl}/qa/answer/${answerId}/report`);
  },
  putAnswerHelpful: answerId => {
    return Axios.put(`${qaUrl}/qa/answer/${answerId}/helpful`);
  },
  putQuestionHelpful: questionId => {
    return Axios.put(`${qaUrl}/qa/question/${questionId}/helpful`);
  },
  postQuestion: (productId, body, name, email) => {
    return Axios.post(`${qaUrl}/qa/${productId}`, {
      body: body,
      name: name,
      email: email
    });
  },
  clickTracker: (element, widget) => {
    // Axios.post(`${apiUrl}/interactions`, {
    //   element: element,
    //   widget: widget,
    //   time: Date.now().toString()
    // });
  },
  postToCart: (productId, sessionId) => {
    // return Axios.post(`${apiUrl}/cart`, {
    //   user_session: parseInt(sessionId),
    //   product_id: parseInt(productId)
    // });
  }
};
