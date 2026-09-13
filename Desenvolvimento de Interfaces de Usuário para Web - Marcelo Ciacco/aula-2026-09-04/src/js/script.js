// Isso imprime um texto no "Console" do navegador (uma área de depuração,
// tipo um bloco de notas onde o programador vê mensagens do código).
console.log("JavaScript Funcionando");

// ===== Variáveis =====
// Variável é uma "caixinha" com um nome, onde guardamos um valor para usar depois.

const nome = "Maria"; // "const" cria uma caixinha cujo valor NUNCA pode ser trocado depois.
let idade = 20; // "let" cria uma caixinha cujo valor PODE ser trocado depois (e só existe dentro do bloco/escopo onde foi criada).

// ===== Tipos de dados (primitivos) =====
// "Tipo primitivo" é a categoria mais básica de informação que uma linguagem entende.

// 1. String -> texto (sempre entre aspas ou crases)
const sobrenome = "Silva";

// 2. Number -> qualquer número, seja inteiro (15) ou decimal (15.5)
const valor = 15;

// 3. Boolean -> só pode ser "true" (verdadeiro) ou "false" (falso)
const ativo = true;

// 4. Null -> significa "nenhum valor de propósito" (é diferente de vazio, string vazia "" ou zero)
const endereco = null;

// "typeof" pergunta para o JavaScript: "qual é o tipo desse valor?" e devolve a resposta como texto.
console.log(typeof (sobrenome)); // vai mostrar "string"
console.log(typeof (valor));     // vai mostrar "number"
console.log(typeof (ativo));     // vai mostrar "boolean"
console.log(typeof (endereco));  // curiosidade: isso mostra "object" (é uma peculiaridade histórica do JavaScript)

// ===== Template String (montar textos juntando variáveis) =====

let msg = "Olá" + nome + " .Você tem " + idade + " anos."; // Concatenação: "somar" pedaços de texto usando o sinal de +
// (repare que faltam espaços ao lado de "Olá" e antes de "anos" nessa forma com +)

msg = `Olá ${nome}, você tem ${idade} anos`; // Interpolação: usando crases (``), colocamos variáveis direto dentro do texto com ${...}, fica mais fácil de ler
console.log(msg); // mostra a frase final já montada


// ===== Condicional (se... senão...) =====
// É uma "bifurcação de caminho": o código decide o que fazer dependendo de uma condição ser verdadeira ou falsa.

if (idade >= 18) { // se a idade for maior ou igual a 18...
    console.log("Acesso Autorizado");
} else { // senão (ou seja, se for menor que 18)...
    console.log("Acesso Negado");
}

// Guia rápido dos comparadores/operadores lógicos:
// == Verifica apenas o valor (compara "por cima", pode converter tipos, ex: 10 == "10" dá true)
// === Verifica valor E tipo (comparação mais segura e recomendada, ex: 10 === "10" dá false)
// && = "e" (E lógico: as duas condições precisam ser verdadeiras)
// || = "ou" (OU lógico: basta uma das condições ser verdadeira)

let numero = 10;
if (numero === 10 && numero > 0) { // só entra aqui se numero for EXATAMENTE 10 E também for maior que 0
    console.log("numero valido e permitido")
} else {
    console.log("numero invalido e não permitido")
}

// Operador Ternário: é um "if/else" resumido em uma linha só.
// Formato: condição ? "o que fazer se verdadeiro" : "o que fazer se falso"
numero > 10 ? "numero valido" : "numero invalido"; // aqui o resultado não é usado em lugar nenhum, só é calculado e descartado


// ===== Funções =====
// Função é um "bloco de instruções" que a gente empacota com um nome, para poder chamar (usar) várias vezes sem reescrever o código.

// Função Simples (sem entrada e sem retorno, só executa uma ação)
function exibirMensagem() {
    console.log("Cadastro realizado");
}

exibirMensagem(); // aqui a gente "chama"/executa a função definida acima

// Função com Parâmetro: "parâmetro" é uma informação que passamos para dentro da função para ela usar.
function exibirMensagemComParametro(nome) {
    console.log(`Ola ${nome}`) // usa o valor recebido para montar a mensagem
}

exibirMensagemComParametro("Marcelo"); // aqui estamos passando "Marcelo" como o parâmetro "nome"

// Função que devolve um resultado usando "return"
function somar(n1, n2) {
    return n1 + n2; // "return" entrega o resultado para quem chamou a função
}

const result = somar(10, 5); // guarda o resultado da soma (15) na variável "result"
exibirMensagemComParametro(result); // reaproveita a função anterior, agora passando o número 15 como se fosse o "nome"

// Arrow Function: é outro jeito (mais moderno e curto) de escrever uma função, usando "=>"
const soma = (n1, n2) => {
    return n1 + n2;
}

// ===== Manipular o DOM (Document Object Model) =====
// O DOM é a representação da página HTML dentro do navegador, em forma de objetos que o JavaScript consegue ler e alterar.
// "document.querySelector" procura um elemento HTML usando um seletor de CSS (ex: "#id", ".classe").

// ATENÇÃO: aqui está escrito "queySelector", mas o nome correto do método é "querySelector" (com "r" depois do "que").
// Por causa desse erro de digitação, essas linhas vão dar erro ao rodar, pois "queySelector" não existe.
const formulario = document.querySelector("#formCadastro"); // deveria buscar o formulário com id "formCadastro"
const campoNome = document.querySelector("#nome");          // deveria buscar o campo de input com id "nome"
const campoEmail = document.querySelector("#email");        // deveria buscar o campo de input com id "email"
const campoIdade = document.querySelector("#idade");        // deveria buscar o campo de input com id "idade"

const mensagem = document.querySelector("#mensagem");       // este já está correto: busca o elemento com id "mensagem"
const listUsuarios = document.querySelector("#listaUsuarios"); // este também está correto: busca o elemento com id "listaUsuarios"

console.log(campoNome.value); // tenta mostrar o valor digitado no campo de nome (o que a pessoa escreveu no input)

// ===== Eventos (ouvinte) =====
// "addEventListener" é como colocar um "ouvinte" esperando algo acontecer (um evento) para então reagir.

// "usuarios" é um Array (uma "lista"/"fileira de gavetas numeradas") que vai guardar
// todos os objetos de usuário cadastrados, um atrás do outro, enquanto a página estiver aberta.
const usuarios = [];

// Função que trata o envio do formulário. Ela recebe "e" (o evento do "submit") como parâmetro.
function cadastrarUsuario(e) {

    // Evita o comportamento padrão do navegador ao enviar um form, que seria recarregar a página inteira.
    e.preventDefault();

    // Capturando os dados enviados
    console.log("Formulário Enviado")
    const nome = campoNome.value.trim();       // ".trim()" remove espaços em branco do começo/fim do texto digitado
    const email = campoEmail.value.trim();
    const idade = Number(campoIdade.value);    // "Number(...)" converte o texto do input (string) para um número de verdade

    // ----- Validações: se algo estiver errado, mostramos o erro e paramos a função com "return" -----

    if (nome === "") {
        mensagem.textContent = "Informe o nome";
        mensagem.className = "erro";

        return; // encerra a função aqui; o restante do código abaixo não é executado
    }

    if (nome.length < 3) {
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres";
        mensagem.className = "erro";

        return;
    }

    if (!email.includes("@")) { // ".includes()" verifica se um texto contém um pedaço dentro dele (aqui, o "@")
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.className = "erro";

        return;
    }

    if (idade < 18) {
        mensagem.textContent = "O usuário precisa ter pelo menos 18 anos";
        mensagem.className = "erro";

        return;
    }

    // Se passou por todas as validações acima, o cadastro é válido: mostramos sucesso.
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.className = "sucesso";

    // ----- Objeto JavaScript -----
    // Um "objeto" agrupa várias informações relacionadas dentro de uma única "caixa", usando pares chave: valor.
    const usuario = {
        nome: nome,
        email: email,
        idade: idade,
    };

    // ----- Convertendo o objeto JavaScript em um texto JSON (JSON.stringify) -----
    // JSON (JavaScript Object Notation) é um formato de TEXTO padronizado para representar dados,
    // usado para guardar ou enviar informações (ex: para um servidor, ou para o localStorage do navegador).
    // "JSON.stringify(objeto)" pega o objeto (que só existe na memória do JavaScript) e devolve
    // uma STRING equivalente, no formato JSON, por exemplo: '{"nome":"Maria","email":"maria@email.com","idade":20}'
    const usuarioJSON = JSON.stringify(usuario);
    console.log("Objeto JavaScript:", usuario);      // mostra o objeto "vivo" (você pode navegar pelas propriedades)
    console.log("Convertido para JSON:", usuarioJSON); // mostra a mesma informação, mas como texto puro (JSON)

    usuarios.push(usuario); // ".push()" adiciona o novo usuário no final do array "usuarios"
    listarUsuarios();       // chama a função abaixo para redesenhar a lista de usuários na tela

    formulario.reset(); // limpa os campos do formulário para permitir um novo cadastro
}

// Registra "cadastrarUsuario" como a função que deve rodar sempre que o formulário for enviado.
formulario.addEventListener("submit", cadastrarUsuario);

// Função responsável por desenhar (renderizar) a lista de usuários cadastrados na tela.
function listarUsuarios() {
    // Correção: antes estava "listarUsuarios.innerHTML" (o nome da própria função, por engano).
    // O elemento certo do HTML é "listUsuarios" (a "<ul id="listaUsuarios">" capturada lá em cima).
    listUsuarios.innerHTML = ""; // limpa a lista atual na tela, para redesenhar tudo do zero a cada cadastro

    // ".forEach()" percorre cada usuário guardado no array "usuarios", um de cada vez.
    usuarios.forEach(function (usuario) {
        const item = document.createElement("li"); // cria um novo item de lista "<li>" na memória

        item.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.idade} anos`; // texto que vai aparecer no item

        listUsuarios.appendChild(item); // insere o "<li>" dentro da "<ul>" que está na página (agora no elemento certo)
    })

}

