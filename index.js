const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')

const multer = require('multer')
const forms = multer()

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(forms.array())
server.use(bodyParser.urlencoded({extended: true}))
/*
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.created_at = new Date().toISOString()
        req.body.updated_at = new Date().toISOString()
    }
    if (req.method === 'PUT') {
        req.body.updated_at = new Date().toISOString()
    }
    next()
})
*/
router.render = (req, res) => {
    res.jsonp({
        data: res.locals.data
    })
}

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
