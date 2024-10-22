const prompt = require("prompt-sync")();


const { criarFerramentas } = require("./ferramentas/criarFerramenta");
const { lerFerramenta } = require("./ferramentas/lerFerramentas");
const { atualizarFerramenta } = require("./ferramentas/atualizarFerramenta");
const { deletarFerramentas } = require("./ferramentas/deletarFerramenta");


criarFerramentas("a13207", "alicate", "pressão","14.09.2021", "apto", "almoxarifado", "xxx")
criarFerramentas("a14608", "chave torquez", "auto", "07.08.2017", "apto", "almoxarifado", "oficina do paulo"  )
criarFerramentas("a15298", "chave de filtro", "auto", "07.06.2022", "apto", "almoxarifado", "xxx" )

lerFerramenta()


deletarFerramentas("a13207")

lerFerramenta()

