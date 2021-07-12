const jsonServer = require('json-server')
const auth = require('json-server-auth')
 
const app = jsonServer.create()
const cors = require('cors');


const router = jsonServer.router('db.json')

const rules = auth.rewriter({
  // Permission rules
  users: 600,
  tasks: 640,
})
 
// /!\ Bind the router db to the app
app.db = router.db
 
// You must apply the auth middleware before the router
app.use(
  cors({
      origin: true,
      credentials: true,
      preflightContinue: false,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
app.options('*', cors());
app.use(rules)
app.use(auth)
app.use(router)
app.listen(3003)