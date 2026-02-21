// Array global para armazenar os produtos cadastrados na memória
let produtos = [];

// Adicionar um event listener para o evento 'submit' do formulário
// Quando o formulário é enviado, a função será executada
document.getElementById("formProduto").addEventListener("submit", function(e) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    const botao = e.submitter.value; // Captura o botão que foi clicado para submeter o formulário
    if (botao === "Cadastrar") {
         // Capturar os valores dos campos de input do formulário
        // .value obtém o conteúdo digitado pelo usuário
        let nome = document.getElementById("nome").value;
    
        // parseFloat() converte a string do input em número decimal
        let preco = parseFloat(document.getElementById("preco").value);

        // Criar um novo objeto produto e adicionar ao array
        // O ID é gerado automaticamente baseado no tamanho atual do array + 1
        produtos.push({ id: produtos.length + 1, nome, preco });
    
        // Salvar os dados no localStorage do navegador para persistência
        salvarLocalStorage();
    } else if (botao === "Limpar") {
        // Limpar o array de produtos e o localStorage
        clearLocalStorage();
    };
    
    // Atualizar a exibição da lista na tela
    atualizarLista();
});

// Função para atualizar a lista de produtos exibida na tela
function atualizarLista() {
    // Obter referência ao elemento <ul> onde será exibida a lista
    let lista = document.getElementById("listaProdutos");
    
    // Limpar todo o conteúdo anterior da lista
    lista.innerHTML = "";
    
    // Percorrer todos os produtos e criar um elemento <li> para cada um
    produtos.forEach(p => {
        // Criar um novo elemento <li> (item da lista)
        let li = document.createElement("li");
        
        // Definir o texto do item com nome e preço formatado com 2 casas decimais
        li.textContent = `${p.nome} - R$ ${p.preco.toFixed(2)}`;
        
        // Adicionar o item criado como filho da lista <ul>
        lista.appendChild(li);
    });
}

// Função para salvar os produtos no localStorage do navegador
function salvarLocalStorage() {
    // JSON.stringify() converte o array de objetos em uma string JSON
    // localStorage só aceita strings, por isso a conversão é necessária
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Função para carregar os produtos salvos no localStorage
function carregarLocalStorage() {
    // Tentar recuperar os dados salvos usando a chave "produtos"
    let dados = localStorage.getItem("produtos");
    
    // Verificar se existem dados salvos (não é null nem undefined)
    if (dados) {
        // JSON.parse() converte a string JSON de volta para array de objetos
        produtos = JSON.parse(dados);
        
        // Atualizar a exibição com os dados recuperados
        atualizarLista();
    }
}

// Executar a função de carregamento quando a página é carregada
// Isso restaura os produtos salvos anteriormente
carregarLocalStorage();