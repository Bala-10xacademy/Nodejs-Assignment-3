const http=require('http')
const fs=require("fs")
const PORT=5000;

const server=http.createServer((req,resp)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err){
            resp.write("Page Not Found");
        }
        else{
            resp.write(data);
            resp.end();
        }
   
    });

    });



server.listen(PORT,()=>{
    console.log("Server Runnning at port 5000")
})