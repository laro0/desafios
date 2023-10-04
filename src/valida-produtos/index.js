//PROGRAMA DE VALIDAR ESTOQUE
//O OBJETIVO DO PROGRAMA É DISPONIBILIZAR UMA FUNÇÃO VALIDARPRODUTOS QUE RECEBE UM PRODUTO(STRING) E VERIFICA SE ELE EXISTE NO ESTOQUE(LISTA DE STRINGS).
//CASO TODOS OS ITENS ESTEJAM DISPONIVEIS EM ESTOQUE DEVE PRINTAR NO CONSOLE A STRING "TODOS OS ITENS DISPONIVEIS"
//CASO NÃO EXISTA UM OU MAIS ITENS DEVE PRINTAR NO CONSOLE "OS ITENS A SEGUIR NAO ESTAO DISPONIVEIS" E PRINTAR NOVAMENTE NO CONSOLE UMA LISTA COM O OS ITENS QUE NAO ESTAO DISPONIVEIS


function validaProdutos(fruta) {
    const estoque = ['uva', 'maca', 'banana', 'pera']
    //console.log('inicio')
    let resposta = 'indisponivel'
    for (let item of estoque) {
        if (item === fruta) {
            resposta = 'disponivel'
            break
        }
    }
    console.log(resposta)
    //console.log('fim')
}

validaProdutos('banana')

function verificarEstoque(estoque) {
    console.log(estoque)
}

export default validaProdutos

function filter_list(listaNumeros){
    const listaNumber = []
    //for para percorrer a lista
    for (let numero of listaNumeros) {
        //if para verificar tipo do item da lista
        if (typeof numero == 'number') {
            //push para adicionar um item na lista nova
            listaNumber.push(numero)
            //continue para ir para o proximo item
            continue

            //parar de percorrer a lista
            //break
        }
    }
    return listaNumber
}
