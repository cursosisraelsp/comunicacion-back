class Factura {
    #id;
    #data;
    static cliente;
    static numFactura;

    constructor(id, cliente, numFactura, data) {
        this.#id = id;
        this.cliente = cliente;
        this.numFactura = numFactura;
        this.#data = data;
    }

    datosFactura() {
        return {
            id: this.#id,
            cliente: this.cliente,
            numFactura: this.numFactura,
            data: this.#data
        }
    }

    crearFactura(id, cliente, numFactura, data) {
        /*this.#id = id;
        this.cliente = cliente;
        this.numFactura = numFactura;
        this.#data = data;*/
    }
    //borrarFactura
    //modificarFactura
    static infoFactura() {
        return `${this.cliente} factura ${this.numFactura}`
    }

    
}

module.exports = Factura;