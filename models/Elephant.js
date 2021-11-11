const mongoose = require("mongoose") 
const ElephantSchema = mongoose.Schema({ 
    colour: String, 
    age: Number, 
    weight: Number 
}) 
 
module.exports = mongoose.model("Elephant", 
ElephantSchema) 