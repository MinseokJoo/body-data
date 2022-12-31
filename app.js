const express = require("express")

const app = express()

app.use(express.json());


app.get("/querystring", (req,res) => {
  const id = req.query.id
  
  res.send(id)
})

app.post("/body-mulipart", (req,res) => {
  res.send("body-mulipart page")
})

app.post("/body-json", (req,res) => {
  const {id} = req.body

  res.send(id)
})

app.listen(3000,() => console.log(3000,"번 퐅으로 섭어 열림"))