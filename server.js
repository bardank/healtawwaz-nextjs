const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/:category_slug/:postId', (req, res) => {
    return app.render(req, res, '/[category_slug]/[postId]',{category_slug:req.params.category_slug, postId: req.params.postId})
  })

  server.get('/tag/:id', (req, res) => {
    return app.render(req, res, '/tag/[id]', {id: req.params.id})
  })
  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user/[id]', {id: req.params.id})
  })
  server.get('/category/:id', (req, res) => {
    return app.render(req, res, '/category/[id]', {id: req.params.id})
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})