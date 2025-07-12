const cookieparser = require("cookie-parser")
const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(cookieparser());
// Cookie
// app.get("/", (req,res)=>{
//     res.cookie("name", "sunny");  //res.cookie se cookie set hoti h 
//     res.send("all are done")
// })

// app.get("/read", (req,res)=>{
//     console.log(req.cookies) //req.cookies se cookie read ho sakti h 
//     res.send("Read is done")
// })

// bcrypt

// app.get("/",(req,res)=>{
//     bcrypt.genSalt(10,(err,salt)=>{   //isse hum aapne password to encrypt kar denge security ki wajah se salt 1 random string h value of 10 
//         bcrypt.hash("Sunny@123",salt,(err,hash)=>{ // hash 1 hash value hoti h jo hamare salt(string) k sath mil kar hamare actual password ko encrypt karti h......!!!!!!!
//             console.log(hash);
//         })
//     })
// })


// //to ye encrypted password hamare DB m store ho jaata h 

// // next time jab user login karega password se to vo to aapne banaye hue password se hi login karega to usko auntenticate karne k lie 
// // uske password or jo hash value humne DB m store kari h usko compare karenge agar same hogi to login hoga verna nhi 


//  app.get("/pass",(req,res)=>{
//      bcrypt.compare("Sunny@123"/* isko ni hum khi store karenge directky aise nhi likh sakte */ ,"$2b$10$E9F0hji0LgEt8po7YXVfY.qrsJkMD.9Li6HQ6WvBJNUM7ZKlDLtGO"/* isko ni hum khi store karenge directky aise nhi likh sakte */,(err,result)=>{
//       console.log(result);
//     })
//  })

// JWT :- This is made up with 3 things xxxx.yyyy.zzzz yyyy ko hum payload bolte h isme generally hum user ki koi unique
// detail file karte h generally email or isko encrypt karte h 1 sceret key k sath jisse token banta h fir is token ko hum cookie ki help se
// browser p set kar dete h 

app.get("/", (req,res)=>{
    let token = jwt.sign({email: "sunny@example.com"} /* ye email hum req.body se lete h filhal hardcoded le rahe h */, "secretkey"/*ye bi hum khi or store karte h vaha se import karte h secret key ko bi*/)
    res.cookie("token",token) // here we set the token in cookie
    res.send("hello")

})


app.get("/read",(req,res)=>{
    let data = jwt.verify(req.cookies.token, "secretkey") //ye hum use karte h token m se data nikalne k liye
    console.log(data);
    
})

app.listen(3000);