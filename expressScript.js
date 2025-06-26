// Express.JS
// It is a npm package
// It is a Framework
// It manage everything from receiving the request and giving the response.

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World dfsvrv")
})


app.get('/profile', (req,res)=>{
    res.send("Hello World and India How r u? gfhf")
})

app.listen(3000);


