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

// what is Dependancy 
// packages and packages ki dependancy means ki vo kis packages p depend h ye sab h

// what is DevDependancy 
// Aise packages jo sirf development m kaam aayenge or jab hum application ko deploy kar denge to ye packages bi hatt jayegnge


