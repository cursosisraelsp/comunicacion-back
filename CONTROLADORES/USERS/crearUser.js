const Usuario = require("../../0.MODELOS/Usuario.js");

const crearUser = (req, res) => {
    const { nome, email, idade } = req.body;// recibimos datos de usuario por url
    const usuario = new Usuario(nome, email, idade);
    console.log(Usuario.infoUsuario());
    res.send(usuario.datosUsuario());
};

module.exports = crearUser;