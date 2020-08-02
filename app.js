const express = require('express')
const app = express()
const port = process.env.PORT || "8080";

app.get('/', (req, res) => {
  res.send('Hello World, I am up and running!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
