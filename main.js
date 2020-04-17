const express = require("express");
const session = require('express-session')
const app = express()
const port = 4000


app.post("/set", (req, res) => {
  debugger
})  

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

