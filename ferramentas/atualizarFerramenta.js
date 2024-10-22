const { ferramentas } = require("./ferramentas");

function atualizarFerramenta(id, nome, tipo, dataCompra, status, localizacao, alocadoPara) {
    try {
        // função para encontrar um aluno
       const ferramenta = ferramentas.find(ferramenta =>
            ferramenta.id === id
        )
        // verificar se o aluno procurado existe
        if(ferramenta){
            ferramenta.nome = novoNome,
            ferramenta.tipo = novoEmail,
            ferramenta.dataCompra = novoTelefone,
            console.log("Ferramenta editada com sucesso!")
        }else{
            console.log("Ferramenta não econtrada")
        }
    } catch (error) {
        console.error("erro ao editar ferramenta", error.message)
    }
    }

    module.exports = { atualizarFerramenta };