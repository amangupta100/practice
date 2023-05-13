const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.end("Hello from about side");
    }
    else if(req.url=="/home"){
        res.end("Showing home side")
    }
    else{
        res.end("Error 404")
    }
})

server.listen(8000,"127.0.0.1",()=>{
  console.log("Listening to port 8000")
})
