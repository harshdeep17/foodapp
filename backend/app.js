const express = require("express")
var app = express()


app.get('/',(req,res)=>{
    res.send('Hello world')
})

const port = 4000
app.listen(port,(err)=>{
    if(err) console.log(err)
    console.log("server is listening at port 4000")
})