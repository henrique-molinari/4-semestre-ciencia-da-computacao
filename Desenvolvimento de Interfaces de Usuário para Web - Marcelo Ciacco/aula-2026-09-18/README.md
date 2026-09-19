React Componentes:

Componentes são os blocos de construção de uma aplicação React. Cada componente é uma função JavaScript que recebe dados de entrada (chamados de *props*) e devolve JSX, isto é, a descrição de como aquela parte da interface deve aparecer na tela. Em vez de escrever uma página gigante, divide-se a interface em peças pequenas e reutilizáveis (um botão, um cartão, um formulário, um menu), que depois são combinadas entre si.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

function App() {
  return (
    <div>
      <Saudacao nome="Henrique" />
      <Saudacao nome="Marcelo" />
    </div>
  );
}
```

Pontos principais:
- **Nome em maiúscula:** componentes começam com letra maiúscula (`Saudacao`), para o React diferenciá-los de tags HTML comuns (`div`, `h1`).
- **Props:** dados passados do componente pai para o filho, como atributos (`nome="Henrique"`). São somente leitura.
- **State (`useState`):** dados internos do componente que podem mudar com o tempo; quando mudam, o React redesenha o componente automaticamente.
- **Reutilização e composição:** o mesmo componente pode ser usado várias vezes com props diferentes, e componentes podem conter outros componentes.


SPA: Uma Single Page Application (SPA) — ou Aplicação de Página Única—é um site ou aplicação web que interage com o usuário reescrevendo dinamicamente a página atual, em vez de carregar páginas inteiras novas do servidor. Isso cria uma experiência de navegação fluida e rápida, muito parecida com a de um aplicativo nativo para celular ou computador.


Endpoints:

Um endpoint é uma URL específica de uma API que expõe um recurso ou uma operação do servidor. O front-end (por exemplo, uma SPA em React) usa endpoints para buscar e enviar dados, geralmente em formato JSON, através de requisições HTTP.

Cada endpoint combina uma **URL** com um **método HTTP**, que indica a ação desejada:

| Método | Uso | Exemplo |
|--------|-----|---------|
| GET | Buscar dados | `GET /api/usuarios` (lista usuários) |
| POST | Criar um recurso | `POST /api/usuarios` (cria usuário) |
| PUT / PATCH | Atualizar um recurso | `PUT /api/usuarios/5` |
| DELETE | Remover um recurso | `DELETE /api/usuarios/5` |

Exemplo de consumo em React:

```jsx
useEffect(() => {
  fetch("https://viacep.com.br/ws/01001000/json/")
    .then((resposta) => resposta.json())
    .then((dados) => setEndereco(dados));
}, []);
```

Aqui, `https://viacep.com.br/ws/01001000/json/` é o endpoint: ele recebe um CEP e devolve o endereço correspondente.

Relação com a SPA: como a SPA não recarrega a página inteira, ela depende de endpoints para obter os dados sob demanda e atualizar só a parte da tela que mudou.


Diferença de uma aplicação feita em HTML tradicional e aplicação feita em React:



Vite: Como funciona


Como vai funcionar o desenvolvimento do projeto:

Node JS -> NPM -> Vite -> React ->  

 npm create vite@latest helpdesk-web --template react-ts
npm warn "react-ts" is being parsed as a normal command line argument.
npm warn Unknown cli config "--template". This will stop working in the next major version of npm.
Need to install the following packages:
create-vite@9.2.1
Ok to proceed? (y) y

> npx
> create-vite helpdesk-web react-ts

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\Users\henri\OneDrive\Desktop\4° Semestre\Desenvolvimento de Interfaces de Usuário para Web - Marcelo Ciacco\aula-2026-09-18\helpdesk-web...
│
◇  Installing dependencies with npm...

Se fechar o servidor, para rodar novamente é só entrar na pasta do projeto e usar o comando "npm run dev" no terminal



