let fs=require('fs');

let http=require('http');

let server=http.createServer((req,res)=>{

    res.readFile('city.json','utf-8',function(err,data){

        if(err) throw err;

        res.write(data);
        res.end();
    })
})

server.listen(6300);
