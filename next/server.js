const app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const next = require('next')

const { tfHistory } = require('./tf.history')
const { wxsimpact } = require('./wxsimpact')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const reqHandler = nextApp.getRequestHandler()

io.on('connection', socket => {
  console.log(`somebody connected`);
  socket.on('hello', (data) => {
    console.log(`somebody says: "${data}"`);
  });
});

nextApp.prepare()
  .then(() => {

    app.get('/tf/history', function (req, res) {
      tfHistory(req, res);
    });

    app.get('/tf/wxsimpact', function (req, res) {
      wxsimpact(req, res);
    });

    app.get('/taco', function (req, res) {
      console.log("let's eat taco!!!");
    });

    app.get('*', (req, res) => {
      return reqHandler(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  });
