const express = require('express');
const path = require('path');
const app = express();
const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
let rootReducer = require('./reducers/main.js');
let App = require('./components/app.js');
const bodyParser = require('body-parser');
const Axios = require('axios');
const apiUrl = 'http://18.222.40.124';

const port = process.env.PORT || 8888;

App = App.default;
rootReducer = rootReducer.default;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

let counter = 0;

const handleRender = (req, res) => {
  counter++;
  let productId = parseInt(req.query.products);
  if (productId !== undefined || !isNaN(productId)) {
    // let sessionId = parseInt(session_id);
    Axios.get(`${apiUrl}/products/${productId}`)
      .then(({data}) => {
        let info = {
          overviewProductInfo: data,
        };
        const store = createStore(
          rootReducer, info
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
  } else {
    res.sendStatus(200);
  }
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
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
}

app.get('/', handleRender);

app.listen(port, () => {
  console.log('Listening on ', port)
});