let fs=require('fs');

fs.readFile('city.json','utf-8',(err,data)=>{

    if(err) throw err;
    console.log(data);
})