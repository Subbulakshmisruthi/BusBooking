const express = require("express");
const app = express()

app.get("/test",(req,res)=>{
    res.json({"Status":"Working broo"});
})

app.listen(4000)