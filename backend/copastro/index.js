// install express with `npm install express`
const express = require('express')
const app = express()

const articles = [
  { id: 1, name: 'Abrigo Aguirre', price: 23 },
  { id: 2, name: 'Chaqueta Gonzalez', price: 100 },
  { id: 3, name: 'Pantalón Chino', price: 40 },
]

app.get('/', (req, res) =>
  res.send(
    JSON.stringify({ data: { films: ['topota', 'return of the topota'] } }) // https://b64nv1.deta.dev/
  )
)

app.get('/api/articles/', (req, res) =>
  res.send(JSON.stringify({ data: articles }))
)

app.get('/api/articles/:articleId', (req, res) =>
  res.send(
    JSON.stringify({
      data: articles.find((a) => a.id === req.params['articleId']),
    })
  )
)

// export 'app'
module.exports = app
