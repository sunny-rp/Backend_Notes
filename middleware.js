//MiddleWare
// jab request route tak puchne se phele ruk jaye or kuch or kaam kare for example authentication etc to usko middleware bolte h
// there is 2 ways of writting middleware kal dekhte h 


const express = require('express');
const app = express();

app.use((req,res,next)=>{

})
// ye app.use jo p is page p route hoga unse phele chalega hamesha everytime


app.get("/",(req,res)=>{
  res.send("Hello JI")
})

app.listen(3000);