---

# 🧑‍🏫 **Aula 3 – Manipulação de Arrays de Objetos, Formulários e Armazenamento Temporário**

---

## 🎯 **Objetivos da Aula**

* Revisar e aplicar **arrays de objetos** para armazenar dados.
* Integrar **inputs de formulários** com JavaScript (DOM).
* Enviar e manipular esses dados no **back-end com Node.js**.
* Usar **JSON e localStorage** para armazenamento temporário.

---

## 📍 1. Manipulação de Arrays de Objetos

**Exemplo de lista de produtos no front-end:**

```javascript
// Declaração de um array de objetos para armazenar produtos
// Cada objeto representa um produto com propriedades: id (identificador único), nome e preço
let produtos = [
    { id: 1, nome: "Teclado", preco: 99.90 },
    { id: 2, nome: "Mouse", preco: 59.90 },
    { id: 3, nome: "Monitor", preco: 899.90 }
];

// Exibir todos os produtos usando forEach()
// forEach() executa uma função para cada elemento do array
// 'p' representa cada produto individual durante a iteração
produtos.forEach(p => console.log(`${p.nome} - R$ ${p.preco}`));

// Filtrar produtos com preço acima de R$ 100 usando filter()
// filter() cria um novo array contendo apenas os elementos que atendem à condição
// A condição é definida pela função de callback que retorna true/false
let caros = produtos.filter(p => p.preco > 100);
console.log("Produtos caros:", caros);

// Adicionar um novo produto ao final do array usando push()
// push() adiciona um ou mais elementos ao final do array e retorna o novo tamanho
produtos.push({ id: 4, nome: "Fone", preco: 199.90 });
```

---

## 📍 2. Integração com Formulários (DOM)

📄 **index.html**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Produtos</title>
</head>
<body>
    <h1>Cadastro de Produtos</h1>
    <form id="formProduto">
        <input type="text" id="nome" placeholder="Nome" required>
        <input type="preço" id="preco" placeholder="preco" required>
        <button type="submit">Cadastrar</button>
    </form>
    <ul id="listaClientes"></ul>
    <script src="script.js"></script>
</body>
</html>
```

📄 **script.js**

```javascript
// Array global para armazenar os produtos cadastrados na memória
let produtos = [];

// Adicionar um event listener para o evento 'submit' do formulário
// Quando o formulário é enviado, a função será executada
document.getElementById("formProduto").addEventListener("submit", function(e) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

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
```

---

## 📍 3. Uso de Arrays no Back-end com Node.js

📂 **controllers/produtoController.js**

```javascript
// Array de produtos armazenado em memória no servidor
// Em uma aplicação real, estes dados viriam de um banco de dados
let produtos = [
    { id: 1, nome: "Teclado", preco: 99.90 },
    { id: 2, nome: "Mouse", preco: 59.90 }
];

// Função controller para listar todos os produtos
// Exportada para ser usada nas rotas
exports.listar = (req, res) => {
    // Retorna o array de produtos em formato JSON
    // res.json() automaticamente converte o objeto/array para JSON e define o Content-Type
    res.json(produtos);
};

// Função controller para adicionar um novo produto
exports.adicionar = (req, res) => {
    // Desestruturação: extrair 'nome' e 'preco' do corpo da requisição HTTP
    // req.body contém os dados enviados no corpo da requisição POST
    let { nome, preco } = req.body;
    
    // Criar objeto do novo produto
    // ID gerado automaticamente baseado no tamanho atual do array + 1
    // parseFloat() garante que o preço seja um número decimal
    let novoProduto = { id: produtos.length + 1, nome, preco: parseFloat(preco) };
    
    // Adicionar o novo produto ao array em memória
    produtos.push(novoProduto);
    
    // Responder com JSON contendo mensagem de sucesso e os dados do produto criado
    // Útil para o front-end confirmar que a operação foi bem-sucedida
    res.json({ mensagem: "Produto adicionado com sucesso!", produto: novoProduto });
};
```

📂 **routes/produtoRoutes.js**

```javascript
// Importar o módulo Express para criar o roteador
const express = require('express');

// Criar uma instância do roteador Express
// O router permite definir rotas modulares que podem ser importadas em outros arquivos
const router = express.Router();

// Importar o controller que contém a lógica de negócio para produtos
const produtoController = require('../controllers/produtoController');

// Definir rota GET para '/produtos' - utilizada para LISTAR produtos
// Quando uma requisição GET for feita para '/produtos', executa produtoController.listar
router.get('/produtos', produtoController.listar);

// Definir rota POST para '/produtos' - utilizada para ADICIONAR novos produtos
// Quando uma requisição POST for feita para '/produtos', executa produtoController.adicionar
router.post('/produtos', produtoController.adicionar);

// Exportar o router para que possa ser importado e usado em outros arquivos
// Isso permite modularizar as rotas da aplicação
module.exports = router;
```

📂 **app.js**

```javascript
// Importar o framework Express para criar o servidor web
const express = require('express');

// Criar uma instância da aplicação Express
// Esta instância será usada para configurar middlewares, rotas e iniciar o servidor
const app = express();

// Importar as rotas de produtos que foram definidas em arquivo separado
// Isso mantém o código organizado seguindo o padrão de arquitetura MVC
const produtoRoutes = require('./routes/produtoRoutes');

// Middleware para parsear (interpretar) requisições JSON
// Sem este middleware, req.body seria undefined em requisições POST com JSON
// express.json() analisa o corpo das requisições e converte JSON em objetos JavaScript
app.use(express.json());

// Registrar as rotas de produtos na aplicação
// '/' define o prefixo base - todas as rotas de produtoRoutes serão acessíveis a partir da raiz
// Por exemplo: GET /produtos, POST /produtos
app.use('/', produtoRoutes);

// Iniciar o servidor na porta 3000
// O callback é executado quando o servidor estiver pronto para receber requisições
// listen() faz a aplicação "escutar" por conexões HTTP na porta especificada
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
```

---

## 📍 4. Armazenamento Temporário: JSON e LocalStorage

* **JSON.stringify(obj)** → converte objeto para string.
* **JSON.parse(string)** → converte string para objeto.
* **localStorage.setItem("chave", valor)** → salva no navegador.
* **localStorage.getItem("chave")** → lê do navegador.

**Exemplo rápido:**

```javascript
// Criar um array de objetos para demonstrar o armazenamento
let dados = [{ nome: "Lucas" }, { nome: "Mariana" }];

// Converter o array de objetos para string JSON e salvar no localStorage
// O localStorage só aceita strings, por isso usamos JSON.stringify()
// "alunos" é a chave que será usada para recuperar os dados posteriormente
localStorage.setItem("alunos", JSON.stringify(dados));

// Recuperar os dados do localStorage usando a chave "alunos"
// JSON.parse() converte a string JSON de volta para array de objetos JavaScript
let recuperados = JSON.parse(localStorage.getItem("alunos"));

// Exibir os dados recuperados no console para verificar se funcionou
console.log(recuperados); // Resultado: [{ nome: "Lucas" }, { nome: "Mariana" }]
```

---

## 🧪 **Atividade Prática**

1. Criar um formulário para cadastrar **clientes** (nome, email).
2. Mostrar a lista de clientes cadastrados na tela.
3. Salvar e carregar os clientes usando **localStorage**.
4. Criar uma rota no Node.js que retorne a lista de clientes em JSON.

---

## 📚 **Próxima Aula**

* Integração **front-end ↔ back-end** via **fetch API**.
* Persistência em banco de dados (SQLite/MySQL).
* CRUD completo no padrão MVC.

---

## ✨ Resumo

> "Hoje aprendemos a manipular arrays de objetos no front-end, integrar com formulários e até guardar dados no navegador e no servidor. Isso nos aproxima de sistemas reais, onde a informação flui entre o usuário e o servidor."

---
