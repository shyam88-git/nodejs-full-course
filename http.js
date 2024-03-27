let http=require('http');


//req>what we send to the server(params,query params,body);


let server=http.createServer((req,res)=>{

    res.write(`<h1>This is node js code for me we have some changes</h1>`);
    res.end();
})

server.listen(7800,()=>{

    console.log("server is stared on port 7600");
});