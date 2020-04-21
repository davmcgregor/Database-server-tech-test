const express = require("express");
const app = express()
const port = 4000

let store = {}

app.post("/set", (req, res) => {
  for (let key in req.query) {
    store[key] = req.query[key]
  }
  console.log(store);
  res.send(`stored ${Object.keys(req.query).length}`);
}) 

app.get("/get", (req, res) => {
  res.send(req.query.key)
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

