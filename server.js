const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8888

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')))

app.listen(port, () => {
    console.log('Listening on ', port)
});