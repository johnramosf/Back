const contactFormModelo = require('../models/contactForm.model')

const ContactFormController = {
    guardarContacto: async function(req,res){        
       const ContactFormParaGuardar = new contactFormModelo(req.body)
       await ContactFormParaGuardar.save();       
       res.status(200).json(ContactFormParaGuardar)
    },
    listarContactos: async function(req, res){ 
       res.status(200).json(await contactFormModelo.find())
    }

}

module.exports = ContactFormController