const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express()


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
})

app.listen(PORT, ()=>(console.log("Listening at port: " + PORT)))