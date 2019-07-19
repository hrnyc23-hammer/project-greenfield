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

var apiUrl = 'http://18.222.40.124';
var port = process.env.PORT || 8888;
App = App["default"];
rootReducer = rootReducer["default"];
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, '../dist')));
var counter = 0;

var handleRender = function handleRender(req, res) {
  counter++;
  var productId = parseInt(req.query.products);

  if (productId !== undefined || !isNaN(productId)) {
    // let sessionId = parseInt(session_id);
    Axios.get("".concat(apiUrl, "/products/").concat(productId)).then(function (_ref) {
      var data = _ref.data;
      var info = {
        overviewProductInfo: data
      };
      var store = createStore(rootReducer, info);
      var html = renderToString(React.createElement(Provider, {
        store: store
      }, React.createElement(App, null)));
      var finalState = store.getState();
      res.send(renderFullPage(html, finalState));
    })["catch"](function (err) {
      console.log(err);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(200);
  }
};

function renderFullPage(html, preloadedState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Project Greenfield</title>\n      </head>\n      <body>\n        <div id=\"app\">".concat(html, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(preloadedState), "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ");
}

app.get('/', handleRender);
app.listen(port, function () {
  console.log('Listening on ', port);
});