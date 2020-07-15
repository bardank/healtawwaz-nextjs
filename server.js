const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/:category_slug/:postId', (req, res) => {
    return app.render(req, res, '/[category_slug]/[postId]',{query:req.query, params: req.params})
  })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})