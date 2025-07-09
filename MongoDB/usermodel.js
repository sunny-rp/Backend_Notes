const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/mongodbpractice`);

//Mongoose:- Mongoose is a Node.js library that provides a clean and powerful way to interact with MongoDB using schemas and models.
//It's an ODM (Object Data Modeling) tool — similar to how ORMs (like Sequelize for SQL) work.

/*Mongoose helps by:

Defining schemas (structure and types for documents)

Creating models (to interact with collections)

Adding validations

Supporting middleware (e.g., pre-save hooks)

Making database queries easier and safer

*** Mongoose is commonly used to connect a Node.js server to a MongoDB database.........!!!!!!!!!!!!!!!!!!!!        */

const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
})

module.exports = mongoose.model("user",userSchema);