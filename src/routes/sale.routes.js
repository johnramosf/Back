const Router = require('express').Router();
const Sale = require('../models/sale.model');
const saleController = require('../controllers/sale.controller');

Router.get('/', saleController.list);
Router.post('/', saleController.create);

module.exports = Router;