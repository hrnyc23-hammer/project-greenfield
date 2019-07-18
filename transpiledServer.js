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

var rootReducer = require('./src/reducers/main.js');

var thunkMiddleWare = require('redux-thunk');

var App = require('./src/components/app.jsx');

var bodyParser = require('body-parser');

var Axios = require('axios');

var _require4 = require('underscore'),
    template = _require4.template;

var port = process.env.PORT || 8888;
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, '/dist')));
app.use(handleRender);

var handleRender = function handleRender(req, res) {
  var products = req.query.products;
  var productId = parseInt(products);
  var sessionId = parseInt(session_id);
  Axios.get("/products/".concat(productId)).then(function (_ref) {
    var data = _ref.data;
    var store = createStore(rootReducer, data);
    var html = renderToString(h(Provider, {
      store: store
    }, h(App, null)));
    var finalState = store.getState();
    res.send(renderFullPage(html, finalState));
  })["catch"](function (err) {
    return res.sendStatus(500);
  });
};

function renderFullPage(html, preloadedState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Project Greenfield</title>\n      </head>\n      <body>\n        <div id=\"app\">".concat(html, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(template(preloadedState), "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ");
}

app.listen(port, function () {
  console.log('Listening on ', port);
});
