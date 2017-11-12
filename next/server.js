const express = require('express')
const next = require('next')

const { tfHistory } = require('./tf.history')
const { wxsimpact } = require('./wxsimpact')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/tf/history', function (req, res) {
      tfHistory(req, res);
    })

    server.get('/tf/wxsimpact', function (req, res) {
      wxsimpact(req, res);
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })