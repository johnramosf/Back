const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

//conectarse a mongoose
mongoose.connect(process.env.mongdb_str_url)
.then((db)=> console.log("Connected"))
.catch((err)=>console.log(err));

//Configuraciones
app.use(express.urlencoded({extended:false}));
//configurar rutas
const productRoutes = require('./routes/product.routes');
const saleRoutes = require('./routes/sale.routes');

app.use('/products',productRoutes);
app.use('/sales',saleRoutes);

app.get("/", function (req, resp) {
    resp.send("Hello from Vercel");
});

app.listen(3000,() => {
    console.log('Server running');
});