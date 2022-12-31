const express = require("express")

const app = express()

app.use(express.urlencoded({extended: false}))

app.get("/", (req,res) => {
  res.send('<form action="/" enctype="multiaprt/form-data" method="post"><input name="id"/><button  type="submit">전송</button></form>')
})

app.post("/", (req,res) => {
  const id = req.body.id
  res.send(id)
})

app.listen(3000, () => console.log(3000,"서버 열림"))