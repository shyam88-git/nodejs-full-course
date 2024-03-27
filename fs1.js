let fs=require('fs');

fs.appendFile('myText.txt','Janjyoti college from mnr',(err)=>{

    if(err) throw err;

    console.log("File appended");
})
