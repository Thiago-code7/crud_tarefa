const { ferramentas } = require("./ferramentas");

function deletarFerramentas(id) {
    try {
       const indice = ferramentas.findIndex(elementosdoarray =>
           elementosdoarray.id === id
       )
       if (indice === -1) {
           console.log("Ferramenta não encontrada")
       } else {
           ferramentas.splice(indice, 1)
           console.log("ferramenta deletada com sucesso!")
       }
       
    } catch (error) {
       
    }
   }
module.exports = { deletarFerramentas };