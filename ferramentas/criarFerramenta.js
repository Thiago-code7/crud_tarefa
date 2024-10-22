const { ferramentas } = require("./ferramentas");

function criarFerramentas(id, nome, tipo, dataCompra, status, localizacao, alocadoPara) {
    const novaFerramenta = { id, nome, tipo, dataCompra, status, localizacao, alocadoPara }
    try {
       ferramentas.push(novaFerramenta)
    } catch (error) {
        console.error("erro ao cadastrar dados", error.message)
    }
}

module.exports = { criarFerramentas };