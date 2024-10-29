const prompt = require("prompt-sync")();


const { criarFerramentas } = require("./ferramentas/criarFerramenta");
const { lerFerramenta } = require("./ferramentas/lerFerramentas");
const { atualizarFerramenta } = require("./ferramentas/atualizarFerramenta");
const { deletarFerramentas } = require("./ferramentas/deletarFerramenta");
const { ferramentas } = require("./ferramentas/ferramentas");



function exibirMenu() {
    console.log("======================")
    console.log("1-criar ferramentas ")
    console.log("2-atualizar ferramenta")
    console.log("3-deletar ferramentas")
    console.log("4-ler ferramenta")
    console.log("5-sair do sistema")
    console.log("====================")
}


let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("digite uma opção"));
    let id;
    switch (opcao) {
        case 1:
             id = prompt("digite o id:");
            let nome = prompt("digite o nome da ferramenta:");
            let tipo = prompt("digite o tipo de ferramenta:");
            let dataCompra = prompt("digite a data da compra:");
            let status = prompt("digite o status:");
            let localizacao = prompt("digite a localizacão:");
            let alocadoPara = prompt("digite alocado para qual empresa:")
            criarFerramentas(id, nome, tipo, dataCompra,status, localizacao, alocadoPara);
            listarFerramenta()
            break;
        case 2:
            id = prompt("digite o id:");
            let novoNome = prompt("digite o novoNome da ferramenta:");
            let novoTipo = prompt("digite o novoTipo de ferramenta:");
            let novoTelefone = prompt("digite o novo telefone do aluno;");
            editarAluno(matricula, novoNome, novoEmail, novoTelefone);
            lerFerramenta();
            break;
        case 3:
            id = prompt("digite o id:");
            excluirFerramenta(ferramentas)
            console.log("excluindo ferramentas...")
            break;
        case 4:
            lerFerramenta()
            break;
        case 5:
            console.log("saindo do sistema...")
            break;
        default:
            console.log("valor invalido")
            break
    }
} while (opcao !== 5);



