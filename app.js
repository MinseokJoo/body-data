const express = require("express")

const app = express()

app.use(express.json())

app.get("/querystring", (req,res) => {
  res.send("querystring page")
})


app.post("/body-formdata", (req,res) => {
  res.send("body-formdata page")
})

app.post("/body-mulipart", (req,res) => {
  res.send("body-mulipart page")
})

app.post("/body-json", (req,res) => {
  res.send("body-json page")
})


app.listen(3000,() => console.log(3000,"번 퐅으로 섭어 열림"))