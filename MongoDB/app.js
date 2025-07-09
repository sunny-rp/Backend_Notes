const express = require('express')
const app = express();
const userModel = require("./usermodel")



app.get("/",(req,res)=>{
  res.send("hello");
})


//create
app.get("/create", async (req,res)=>{     //The MongoDb code is asynchronous so that why we use async await in that route .......!!!!!
    let userDetails = await userModel.create({
        name: "amit",
        age : 25,
        email: "amit@google.com"
    }) 
    res.send(userDetails);
})


//update
app.get('/update', async (req,res)=>{
   let updatedUser = await userModel.findOneAndUpdate(
     {age : 25}, // this is for filter like on that parameter we filter the records
     {name: "Sunny Prajapat"}, //that is what data is updated
     {new:true}); //this is used for giving the updated data

   res.send(updatedUser);
})

//Read all

app.get("/read", async (req,res)=>{
  let users = await userModel.find();
  res.send(users);
})


////Read specific one

app.get("/readone", async (req,res)=>{
  let users = await userModel.findOne({name:"amit"});
  res.send(users);
})


// Delete
app.get("/delete", async (req,res)=>{
  let users = await userModel.findOneAndDelete({name:"sunny"});
  res.send(users);
})


app.listen(3000); 
