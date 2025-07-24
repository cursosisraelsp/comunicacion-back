class Usuario {
    #email;
    static nome;
    static idade;
    constructor(nome, email, idade) {
        this.nome = nome;
        this.#email = email;
        this.idade = idade;
    }

    datosUsuario() {
        return {
            nome: this.nome,
            email: this.#email,
            idade: this.idade
        }
    }

    static infoUsuario(){
        return `${this.nome} está com ${this.idade} anos`
    }
}

module.exports = Usuario;