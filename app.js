const express = require('express')
const app = express()
const port = 3000
const postRouter = require("./routers/posts.js")


app.use("/", postRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`)
})

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.json({message: 'Server del mio blog'})
});


