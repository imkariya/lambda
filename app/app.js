const express = require('express')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000)

module.export.app = serverless(app)