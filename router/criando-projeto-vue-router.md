---
title: 'Criando um projeto com Vue Router'
description: Criação básica de um projeto com Vue Router
permalink: /roteamento/criando-projeto-vue-router
---

# Limpando o projeto

Vamos iniciar a definição do layout do projeto removendo os arquivos e códigos desnecessários. Inicialmente, remova todos os arquivos da pasta `src/components/` e edite o arquivo de estilos `src/assets/main.css` para que fique da seguinte forma:

```css
* {
  margin: 0;
  padding: 0;
}
```

# Criando o layout básico

Em seguida, vamos criar o layout básico do projeto. Para isso, edite o arquivo `src/App.vue` e substitua o conteúdo pelo seguinte:

```html
<script setup></script>

<template>
  <div id="layout">
    <header>
      <h1>Meu projeto</h1>
    </header>
    <aside>
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/projects">Projetos</router-link>
        <router-link to="/contact">Contato</router-link>
        <router-link to="/about">Sobre nós</router-link>
      </nav>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
  #layout {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    min-height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 11fr;
    grid-template-rows: auto 1fr;

    grid-template-areas:
      'sidebar header'
      'sidebar main';
  }

  header {
    grid-area: header;
    height: 10vh;
  }

  aside {
    grid-area: sidebar;
  }

  aside nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  main {
    grid-area: main;
  }
</style>
```

Note que o layout é composto por um cabeçalho (`header`), uma barra lateral (`aside`) e o conteúdo principal (`main`). O cabeçalho contém o título do projeto, a barra lateral contém os links para as diferentes páginas da aplicação e o conteúdo principal é onde os componentes da aplicação serão exibidos.

Usamos os conceitos de _grid layout_ do CSS para definir a estrutura do layout. O layout é dividido em duas colunas, onde a primeira coluna ocupa 1/12 do espaço e a segunda coluna ocupa 11/12 do espaço. A primeira coluna contém a barra lateral e a segunda coluna contém o cabeçalho e o conteúdo principal.

## O RouterView e o RouterLink

Note que utilizamos os componentes `RouterView` e `RouterLink` do Vue Router. Esses são componentes fornecidos pelo Vue Router e são novidades em relação ao conteúdo anterior. Vamos compreender o que cada um faz:

- `RouterView`: é um componente que exibe o componente correspondente à rota atual. Ou seja, quando o usuário acessa uma determinada URL, o `RouterView` exibe o componente associado a essa rota.
- `RouterLink`: é um componente que gera um link para uma rota específica. Quando o usuário clica em um `RouterLink`, a URL é atualizada e o componente correspondente é exibido no `RouterView`.

Na medida em que usarmos mais esses dois componentes, vamos entender melhor o seu funcionamento e a sua importância para a navegação na aplicação.

# Criando as páginas

Agora, vamos criar os componentes para as páginas `Home`, `Projetos`, `Contato` e `Sobre nós`. Por padrão, o Vue Router sugere que os componentes das páginas sejam armazenados no diretório `src/views/`. Vamos seguir essa convenção. Note que do ponto de vista funcional, não existe diferença entre um componente armazenado em `src/components/` e um componente armazenado em `src/views/`. A diferença é apenas semântica e organizacional.

Vamos criar os seguinte arquivos:

- `src/views/HomeView.vue`: página inicial da aplicação, que será exibida quando o usuário acessar a URL `/`.
- `src/views/ProjectsView.vue`: página que exibe os projetos da aplicação, que será exibida quando o usuário acessar a URL `/projects`.
- `src/views/ContactView.vue`: página de contato, que será exibida quando o usuário acessar a URL `/contact`.
- `src/views/AboutView.vue`: página que exibe informações sobre a aplicação, que será exibida quando o usuário acessar a URL `/about`.

Crie os arquivos `src/views/HomeView.vue`, `src/views/ProjectsView.vue`, `src/views/ContactView.vue` e `src/views/AboutView.vue` com o seguinte conteúdo:

- `src/views/HomeView.vue`:

```html
<template>
  <h1>Esta é a página principal</h1>
</template>
```

- `src/views/ProjectsView.vue`:

```html
<template>
  <h1>Esta é a página de projetos</h1>
</template>
```

- `src/views/ContactView.vue`:

```html
<template>
  <h1>Esta é a página de contato</h1>
</template>
```

- `src/views/AboutView.vue`:

```html
<template>
  <h1>Esta é a página sobre nós</h1>
</template>
```

# Configurando as rotas

Por fim, vamos configurar as rotas da aplicação. Edite o arquivo `src/router/index.js` e substitua o conteúdo pelo seguinte:

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
  ],
});

export default router;
```

Neste arquivo, importamos os componentes das páginas `HomeView`, `ContactView`, `ProjectView` e `AboutView` e definimos as rotas correspondentes a cada uma dessas páginas. A rota `/` é associada à página inicial, a rota `/about` é associada à página `AboutView`, a rota `/contact` é associada à página `ContactView` e a rota `/projects` é associada à página `ProjectView`.

Importamos de forma diferente o componente `AboutView` utilizando uma _arrow function_ e o método `import`. Essa é uma forma de carregar o componente de forma assíncrona, o que pode ser útil para otimizar o carregamento da aplicação. Quando o usuário acessar a rota `/about`, o componente `AboutView` será carregado de forma assíncrona. Podemos usar as duas formas de importação de componentes.

# Executando o projeto

Agora que definimos o layout básico e as rotas da aplicação, vamos executar o projeto para ver o resultado. Execute o comando:

```bash
npm run dev
```

Acesse do projeto no navegador e navegue entre as páginas da aplicação. Você verá o layout básico com o cabeçalho, a barra lateral e o conteúdo principal, além das páginas `Home`, `Projetos`, `Contato` e `Sobre nós`.

Um detalhe importante é que, ao criar o projeto escolhendo a opção de adicionar o vue-router no momento da criação, algumas configurações já foram realizadas automaticamente. Isso inclui a instalação do Vue Router, a criação do arquivo `src/router/index.js` e a configuração do Vue Router no arquivo `src/main.js`. Essas configurações automáticas facilitam o início do desenvolvimento com o Vue Router.

Por exemplo, no que no arquivo `src/main.js` foi adicionado o Vue Router:

```javascript
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
```

IMPORTANTE: Nós nao precisamos realizar as alterações no arquivo `src/main.js` pois o Vue Router já foi adicionado automaticamente durante a criação do projeto.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Roteamento](. 'Início')</span> <span>[Definição do Layout &gt;](layout.html 'Próximo')</span></span>
