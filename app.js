const express = require("express")

const app = express()

app.use(express.json())

app.get("/querystring", (req,res) => {
  res.send("querystring page")
})

app.listen(3000,() => console.log(3000,"번 퐅으로 섭어 열림"))