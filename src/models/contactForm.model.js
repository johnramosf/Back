const mongoose = require('mongoose')
const ContactSchema = mongoose.Schema

const ContactForm = new ContactSchema({
    nombre: String,    
    email:  String,
    telefono: Number,
    mensaje:String
}) 

module.exports = mongoose.model('contactsForms',ContactForm)