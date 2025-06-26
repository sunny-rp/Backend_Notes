const fs = require('fs');
const http = require('http');

// fs.writeFile("hey.txt","How r u bro",function(err){
//     if(err) console.log("Not done");
//     else console.log("Done");
// })


// fs.appendFile("hey.txt"," i am fine bro",function(err){
//     if(err) console.log("Not done");
//     else console.log("Done");
// })


// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log("Not done");
//     else console.log("Done");
// })

fs.readFile("hello.txt", "utf8", function(err, data) {
    if (err) {
        console.log("Not Done");
    } else {
        console.log("Done");
        console.log("File contents:", data);
    }
});


//HTTP:- this is used for koi bi chiz internet p bhejne or recive karne k liye is http protocol ki need hoti h iske bina hum net p kuch nhi kar sakte

const server = http.createServer((req,res)=>{
    res.end("Hello World")
})

server.listen(3000);