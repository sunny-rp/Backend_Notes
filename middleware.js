//MiddleWare
// jab request route tak puchne se phele ruk jaye or kuch or kaam kare for example authentication etc to usko middleware bolte h
// there is 2 ways of writting middleware kal dekhte h 


const express = require('express');
const app = express();

//Application Level Middleware:-  ye middleware pure appm chalegi mtld ki har route p jab bi koi request jayegi
app.use((req,res,next)=>{
  console.log("Middleware is running......!")
  next(); // jab bi middleware use karenge to hamesha next() last m lagayenge jisse ye middleware request ko aage send karega ya to kisi
          // dusre middleware ko ya fir route ko 
})
// ye app.use jo p is page p route hoga unse phele chalega hamesha everytime isi ko middleware bolte h 


//Route Level Middleware:- ye bss specific route p chalegi jis route k bich m hum isko define karege bss usme hi chalegi 
let routelevel = (req,res,next)=>{
  console.log("Dusra Middleware chala.....!");
  next();
} 

app.get("/",(req,res)=>{
  res.send("Hello JI")
})


app.get("/about",routelevel,(req,res)=>{
  res.send("Hello From the About Page....!")
})

app.get("/profile",(req,res,next)=>{
  // res.send("Hello From the Profile Page....!")
  return next(new Error("Not Implemented"))

})


//Error handler:- It always define at the last of the page after the all routes

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('Something Broke......!')
})



app.listen(3000);



// const express = require('express');
// const app = express();

// // 🔹 Application-level middleware
// app.use((req, res, next) => {
//   console.log("Global Middleware is running......!");
//   next(); // Passes control to the next middleware or route
// });

// // 🔹 Route-level middleware function
// const routeLevelMiddleware = (req, res, next) => {
//   console.log("Route-level Middleware chala.....!");
//   next(); // Allows request to continue to the actual route handler
// };

// // 🔹 This route doesn't have extra middleware
// app.get("/", (req, res) => {
//   res.send("Hello JI");
// });

// // 🔹 This route uses route-level middleware
// app.get("/about", routeLevelMiddleware, (req, res) => {
//   res.send("Hello From the About Page....!");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
