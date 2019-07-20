"use strict";

var express = require('express');

var path = require('path');

var app = express();

var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var _require2 = require('redux'),
    createStore = _require2.createStore;

var _require3 = require('react-redux'),
    Provider = _require3.Provider;

var App = require('./components/app.js')["default"];

var bodyParser = require('body-parser');

var Axios = require('axios');

var _require4 = require('./infoFetchers'),
    getProductInfo = _require4.getProductInfo,
    getStyles = _require4.getStyles,
    getRelated = _require4.getRelated,
    getQA = _require4.getQA,
    getReviews = _require4.getReviews,
    getMeta = _require4.getMeta;

var rootReducer = require("./reducers/main")["default"];

var port = process.env.PORT || 8866;
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, '../dist')));

var handleRender = function handleRender(req, res) {
  var productId = parseInt(req.query.products);

  if (productId !== undefined || !isNaN(productId)) {
    Axios.all([getProductInfo(productId), getStyles(productId), getRelated(productId), getQA(productId), getReviews(productId), getMeta(productId)]).then(Axios.spread(function (infoResponse, stylesResponse, relatedResponse, qaResponse, reviewsResponse, metaResponse) {
      var info = {
        overviewProductInfo: infoResponse.data
      };
      var styles = {
        overviewChangeStyles: stylesResponse.data
      };
      var related = {
        related: relatedResponse.data
      };
      var qa = {
        qaResultsArr: qaResponse.data.results
      };
      var reviews = {
        reviews: reviewsResponse.data
      };
      var meta = {
        meta: metaResponse.data
      };
      var store = createStore(rootReducer, {
        overviewProductInfo: infoResponse.data,
        overviewChangeStyles: stylesResponse.data,
        overviewChangeSelectedStyles: stylesResponse.data.results[0],
        related: relatedResponse.data,
        qaResultsArr: qaResponse.data.results,
        reviews: reviewsResponse.data,
        meta: metaResponse.data
      });
      var html = renderToString(React.createElement(Provider, {
        store: store
      }, React.createElement(App, null)));
      var finalState = store.getState();
      res.send(renderFullPage(html, finalState));
    }))["catch"](function (err) {
      console.error(err);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(404);
  }
};

function renderFullPage(html, preloadedState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Project Greenfield</title>\n      </head>\n      <body>\n        <div id=\"app\">".concat(html, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(preloadedState), "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ");
}

app.get('/favicon', function (req, res) {
  res.sendStatus(404);
});
app.get('/', handleRender);
app.listen(port, function () {
  console.log('Listening on ', port);
});