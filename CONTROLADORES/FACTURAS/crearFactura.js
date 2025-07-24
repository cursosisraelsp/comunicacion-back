const Factura = require("../../0.MODELOS/Factura.js");
const crearFactura = (req, res) => {
    const { id, cliente, numFactura, data } = req.params;// recibimos datos de usuario por url  :/id/:cliente/:numFactura/:data 
    console.log(req.params);
    const factura = new Factura(id, cliente, numFactura, data);

    //console.log(Factura.infoFactura()); 
    res.send(factura.datosFactura());
    //res.send("factura creada");
};

module.exports = crearFactura;