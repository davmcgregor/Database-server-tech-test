const express = require("express");
const session = require("express-session")
const app = express()
const port = 4000

app.use(session({secret: "secret"}))

app.post("/set", (req, res) => {
  console.log(req.query)
  for (let key in req.params){
    app.set(key, req.params[key])
  }
  res.send(`stored ${Object.keys(req.query).length}`)
}) 

// app.get("/get", (req, res) => {
//   res.send('hello world')
// })

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

