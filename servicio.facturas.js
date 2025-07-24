const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { crearFactura } = require("./CONTROLADORES/FACTURAS");

app.use(cors());
app.use(express.json());// permite que o body sexa enviado como un obxeto
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
// PETICIONS POST
app.post("/factura/:id/:cliente/:numFactura/:data", crearFactura);
//START SERVER
app.listen(3000, function () {
 console.log("Server running no 3000");
});