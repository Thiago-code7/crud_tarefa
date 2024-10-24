const { ferramentas } = require("./ferramentas");
 
var validator = require('validator');

function criarFerramentas(id, nome, tipo, dataCompra, status, localizacao, alocadoPara) {
    const novaFerramenta = { id, nome, tipo, dataCompra, status, localizacao, alocadoPara }
    try {
        if(!validator.isLength(id,{min:3,max:6})){
            console.error("o id tem que ter no minimo 3 e no maximo 6 caracteres")
        }
        
        if(!validator.isDate(dataCompra, {format: "DD/MM/YYYY"})){
            console.error("A data informada é invalida")
        }
        
         
        if(
            validator.isEmpty(id) ||
            validator.isEmpty(nome) ||
            validator.isEmpty(tipo) ||
            validator.isEmpty(dataCompra) ||
            validator.isEmpty(status) ||
            validator.isEmpty(localizacao) ||
            validator.isEmpty(alocadoPara) 
        ) {
            console.error("todos os campos deverão ser preenchidos")
            return   
    }
    ferramentas.push(novaFerramenta)

    } catch (error) {
        console.error("erro ao cadastrar dados", error.message)
    }
}


module.exports = { criarFerramentas }