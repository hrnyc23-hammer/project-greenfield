"use strict";

var apiUrl = 'http://18.222.40.124';

var Axios = require('axios');

module.exports = {
  getProductInfo: function getProductInfo(productId) {
    return Axios.get("".concat(apiUrl, "/products/").concat(productId));
  },
  getStyles: function getStyles(productId) {
    return Axios.get("".concat(apiUrl, "/products/").concat(productId, "/styles"));
  },
  getRelated: function getRelated(productId) {
    return Axios.get("".concat(apiUrl, "/products/").concat(productId, "/related"));
  },
  getQA: function getQA(productId) {
    return Axios.get("".concat(apiUrl, "/qa/").concat(productId));
  },
  getReviews: function getReviews(productId) {
    return Axios.get("".concat(apiUrl, "/reviews/").concat(productId, "/list"));
  },
  getMeta: function getMeta(productId) {
    return Axios.get("".concat(apiUrl, "/reviews/").concat(productId, "/meta"));
  }
};