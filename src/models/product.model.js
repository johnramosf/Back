const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const product  = new Schema({
   ref: String,
   price: Number,
   description: String,
   isAvailable: Boolean,
})

module.exports = mongoose.model("product", product);