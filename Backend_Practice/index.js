const express = require('express');
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))// this both line means we parser for forms 
app.use(express.static(path.join(__dirname,'public')))//used to join the path with the public because in public folder all the static file present
app.set('view engine', 'ejs') // we setting up view engine as ejs

// app.get("/",(req,res)=>{
//     res.send("Chal raha h")
// })

app.get("/",(req,res)=>{
    res.render("index")// jab render use karenge to ye us route k baad views folder m jayega or jo file name humne pass kara hoga run kar dega

})


//Dynamic Routing :- When the base route same but the outer route changes as per requiremnets so we can make routes as dynamic 
app.get("/profile/:username",(req,res)=>{
    console.log(req.params.username);// this req.params.username take the value of dynamic route that we define at the browser
    res.send("CHal raha h")
})

//example 2

app.get("/profile/:username/:age",(req,res)=>{
    // console.log(req.params);// this req.params.username take the value of dynamic route that we define at the browser
    res.send(`Welcome ${req.params.username} of age: ${req.params.age}`)
})

app.listen(3000, ()=>{
    console.log("Its Running on PORT:3000");
    
})