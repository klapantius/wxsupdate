const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());

const { tfHistory } = require('./tf/history')
const { wxsimpact } = require('./tf/wxsimpact')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/tf/history', function (req, res) {
    tfHistory(req, res);
})

app.get('/tf/wxsimpact', function (req, res) {
    wxsimpact(req, res);
})

app.listen(3011, function () {
    console.log('Example app listening on port 3011!')
})