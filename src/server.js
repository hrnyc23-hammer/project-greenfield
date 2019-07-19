const express = require('express');
const path = require('path');
const app = express();
const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const rootReducer = require('./reducers/main.js');
const App = require('./components/app.js');
const bodyParser = require('body-parser');
const Axios = require('axios');
const { template } = require('underscore');
const apiUrl = 'http://18.222.40.124';

const port = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')));

const handleRender = (req, res, next) => {
  if (req.path !== '/products/') {
    next();
  }
  let { products } = req.query;
  let productId = parseInt(products);
  // let sessionId = parseInt(session_id);
  return Axios.get(`${apiUrl}/products/${productId}`)
    .then(({data}) => {
      console.log(rootReducer);
      const store = createStore(
        rootReducer.default, data
      );
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const finalState = store.getState();
      res.send(renderFullPage(html, finalState));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500)});
};

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Project Greenfield</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${template(preloadedState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
}

app.use(handleRender);

app.listen(port, () => {
  console.log('Listening on ', port)
});