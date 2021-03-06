const express = require("express");
const app = express()
const port = 4000

let store = {}

app.post("/set", (req, res) => {
  for (let key in req.query) {
    console.log(key)
    store[key] = req.query[key]
  }
  console.log(store);
  res.send(`stored ${Object.keys(req.query).length}`);
}) 

app.get("/get", (req, res) => {
  res.send(store[req.query.key])
  console.log(store[req.query.key]);
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

module.exports = app;
