const fs = require('fs');

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
