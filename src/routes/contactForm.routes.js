const router = require('express').Router()
const contactsFormController = require('../controllers/contactForm.controller')

router.post('/guardar', contactsFormController.guardarContacto)
router.get('/', contactsFormController.listarContactos)

module.exports = router