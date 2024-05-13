---
title: 'Roteamento - Vue Router'
description: Tópicos da aula de roteamento com Vue Router
permalink: /roteamento/
---

# Conceitos de roteamento

Quando desenvolvemos aplicações web, é comum que elas tenham mais de uma página. Para facilitar a navegação entre essas páginas, utilizamos o conceito de roteamento. O roteamento é o processo de determinar qual conteúdo deve ser exibido em uma página web com base na URL acessada pelo usuário.

Vale lembrar que quando usamos o VueJS estamos desenvolvendo uma Single Page Application (SPA), ou seja, uma aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente, sem a necessidade de recarregar a página. O roteamento em uma SPA é feito de forma dinâmica, sem a necessidade de recarregar a página.

No VueJS, o roteamento é feito com o Vue Router, uma biblioteca oficial que nos permite adicionar rotas à nossa aplicação. Com o Vue Router, podemos definir diferentes rotas para a nossa aplicação e associar cada rota a um componente específico. Dessa forma, quando o usuário acessa uma determinada URL, o Vue Router carrega o componente correspondente e exibe o conteúdo na página.

Neste capítulo, vamos aprender a utilizar o Vue Router para adicionar rotas à nossa aplicação VueJS. Vamos criar um projeto VueJS com o Vue Router e adicionar rotas para diferentes páginas. Além disso, vamos aprender a navegar entre as páginas da aplicação e a passar parâmetros para as rotas.

# Criando um projeto com Vue Router

Vamos criar o projeto `vue-layout-router` com o Vue Router. Para isso, execute o seguinte comando:

```bash
npm init vue@latest vue-layout-router
```

Durante a criação do projeto, você será questionado sobre a adição de TypeScript, JSX, Vue Router, Pinia, Vitest, ESLint, Prettier e Vue DevTools. No nosso caso, além das opções já estudadas nas aulas anteriores, vamos adicionar o Vue Router para Single Page Application development. Veja as opções selecionadas:

```bash
Vue.js - The Progressive JavaScript Framework

✔ Package name: … vue-layout-router
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in [...]/vue-layout-router...
```

Agora, entre no diretório do projeto, acesse o Visual Studio Code e execute o projeto com o comando:

```bash
npm install
npm run dev
```

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Início')</span> <span>[Criando um projeto com Vue Router &gt;](criando-projeto-vue-router.html 'Próximo')</span></span>
