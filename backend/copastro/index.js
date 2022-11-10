// install express with `npm install express`
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const articles = require('./data/articles.json')

app.get('/health', (req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(
      JSON.stringify({ data: 'ok' }) // https://copastro.deta.dev/
    )
)

app.get('/api/articles/', (req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(JSON.stringify({ data: articles }))
)

app.get('/api/articles/:articleId', (req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(
      JSON.stringify({
        data: articles.find((a) => a.id === req.params['articleId']),
      })
    )
)

app.get('/api/articles/:articleId/status', (req, res) =>
  res
    .status(200)
    .contentType('application/json')
    .send(
      JSON.stringify({
        data: articles
          .filter((a) => a.id === req.params['articleId'])
          .map(({ id, price }) => ({
            id,
            price,
            stock: Math.round(Math.random() * 3),
          }))
          .pop(),
      })
    )
)

// export 'app'
module.exports = app
