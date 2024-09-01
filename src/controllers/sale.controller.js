const Sale = require('../models/sale.model');
const Product = require('../models/product.model');

const saleController = {
    list: async function (req, res) {
        try {
            const sales = await Sale.find();
            res.status(200).json({ "sales": sales });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    create: async function (req, res) {
        try {
            const sale = new Sale(req.body);
            const product = await Product.findById(req.body.product);
            sale.product = product;
            sale.total = await product.price * sale.quantity;
            sale.save();
            res.status(200).json({ "sale": sale });
        } catch (err) {
             res.status(500).json(err);
        }
    }
};

module.exports = saleController;
