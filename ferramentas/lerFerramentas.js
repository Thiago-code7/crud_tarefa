const { ferramentas } = require("./ferramentas");

function lerFerramenta() {
    try {
        console.table(ferramentas);
    } catch (error) {
        console.error("erro ao listar ferramentas")
    }
}
module.exports = { lerFerramenta };