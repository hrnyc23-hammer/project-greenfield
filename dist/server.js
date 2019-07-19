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

var rootReducer = require('./reducers/main.js');

var App = require('./components/app.js');

var bodyParser = require('body-parser');

var Axios = require('axios');

var _require4 = require('underscore'),
    template = _require4.template;

var apiUrl = 'http://18.222.40.124';
var port = process.env.PORT || 8888;
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, '/dist')));

var handleRender = function handleRender(req, res, next) {
  if (req.path !== '/products/') {
    next();
  }

  var products = req.query.products;
  var productId = parseInt(products); // let sessionId = parseInt(session_id);

  return Axios.get("".concat(apiUrl, "/products/").concat(productId)).then(function (_ref) {
    var data = _ref.data;
    console.log(rootReducer);
    var store = createStore(rootReducer["default"], data);
    var html = renderToString(React.createElement(Provider, {
      store: store
    }, React.createElement(App, null)));
    var finalState = store.getState();
    res.send(renderFullPage(html, finalState));
  })["catch"](function (err) {
    console.log(err);
    res.sendStatus(500);
  });
};

function renderFullPage(html, preloadedState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Project Greenfield</title>\n      </head>\n      <body>\n        <div id=\"app\">".concat(html, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(template(preloadedState), "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ");
}

app.use(handleRender);
app.listen(port, function () {
  console.log('Listening on ', port);
});