// server.js
// https://github.com/typicode/json-server
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', function (req, res) {
  const token = {
    token: 'mytoken'
  }
  res.jsonp(token)
})

server.post('/logout', function (req, res) {
  res.jsonp('done')
})

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)

server.listen(3003, function () {
  console.log('JSON Server is running')
})