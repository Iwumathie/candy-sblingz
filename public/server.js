const express = require("express")
const app = express()
port = 8000

app.get("/", res, req, ()=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log("Server running");
})