const { ferramentas } = require("./ferramentas");
var validator = require('validator');

function atualizarFerramenta(id, novoNome, novoTipo, novadataCompra,novoStatus,novaLocalizacao,novoalocadoPara) {
    try {
        // função para encontrar um aluno
       const ferramenta = ferramentas.find(ferramenta =>
            ferramenta.id === id
        )
        if(
            validator.isEmpty(id) ||
            validator.isEmpty(novoNome) ||
            validator.isEmpty(novoTipo) ||
            validator.isEmpty(novadataCompra) ||
            validator.isEmpty(novoStatus) ||
            validator.isEmpty(novaLocalizacao) ||
            validator.isEmpty(novoalocadoPara) 
        ) {
            console.error("todos os campos deverão ser preenchidos")
            return 
        }

        // verificar se o aluno procurado existe
        if(ferramenta){
            ferramenta.nome = novoNome,
            ferramenta.tipo = novoTipo,
            ferramenta.dataCompra = novadataCompra,
            ferramenta.status = novoStatus,
            ferramenta.localizacao = novaLocalizacao,
            ferramenta.alocadopara = novoalocadoPara
            console.log("Ferramenta editada com sucesso!")
        }else{
            console.log("Ferramenta não econtrada")
        }
    } catch (error) {
        console.error("erro ao editar ferramenta", error.message)
    }
} 

   

module.exports = { atualizarFerramenta };