---
title: "Ajustes de estilos"
permalink: /axios/tmdb-ajustes-estilos
---

# Criando um main.css

Para criar um arquivo de estilos, vamos criar um arquivo `src/assets/main.css` com o seguinte conteúdo:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
}
```

Vamos detalhar o que está sendo feito no arquivo acima:
* A primeira regra CSS define que todos os elementos, incluindo os pseudo-elementos `::before` e `::after`, devem ter:
  * a propriedade `box-sizing` com o valor `border-box`: define que o tamanho de um elemento deve considerar o tamanho do conteúdo, o padding e a borda.
  * a propriedade `margin` com o valor `0`.
* A segunda regra CSS define que o elemento `body` deve ter:
  * a propriedade `min-height` com o valor `100vh`: define que a altura mínima do elemento deve ser 100% da altura da tela.
  * a propriedade `line-height` com o valor `1.6`: define o espaçamento entre linhas.
  * a propriedade `font-family` com uma lista de fontes: define a lista de fontes a serem utilizadas.
  * a propriedade `font-size` com o valor `15px`: define o tamanho da fonte.
  * a propriedade `text-rendering` com o valor `optimizeLegibility`: define que o texto deve ser renderizado de forma a melhorar a legibilidade.

Vamos alterar agora o arquivo `main.js` para importar o arquivo `main.css`:

```js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
```

Note que apenas importamos o arquivo `main.css` que será incluído no arquivo `index.html` automaticamente. Esta foi a única linha alterada no arquivo `main.js`. Além disso, as regras CSS definidas no arquivo `main.css` serão aplicadas a todos os elementos da aplicação.

# Adicionando um estilo no App.vue

Vamos adicionar um estilo no componente `App.vue` para inserir um pequeno cabeçalho. Para isso, vamos primeiramente alterar o bloco `template` do arquivo `App.vue`, para o seguinte conteúdo:

```html
<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
```

Note que adicionamos um cabeçalho com o menu de navegação que já estava presente no arquivo `App.vue` e movemos o bloco `router-view` para dentro do elemento `main`.

Em seguida, vamos adicionar o seguinte estilo no bloco `style` do arquivo `App.vue`:

```css
<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>
```

Nesse caso, criamos três regras CSS:

* para a _tag_ **header**
  * a propriedade `height` com o valor `3rem`: define a altura do elemento como 3 vezes o tamanho da fonte.
  * a propriedade `display` com o valor `flex`: define que o elemento deve ser exibido como um flex container.
  * a propriedade `background-color` com o valor `black`: define a cor de fundo do elemento como preto.
  * a propriedade `color` com o valor `#fff`: define a cor do texto como branco.
  * a propriedade `font-size` com o valor `1.2rem`: define o tamanho da fonte como 1.2 vezes o tamanho da fonte, que foi sido definido no arquivo `main.css`.
  * a propriedade `padding-left` com o valor `2rem`: define o espaçamento interno esquerdo como 2 vezes o tamanho da fonte.
* para a _tag_ **nav**
  * a propriedade `column-gap` com o valor `2rem`: define o espaçamento entre colunas como 2 vezes o tamanho da fonte.
  * a propriedade `margin-bottom` com o valor `0`: define o espaçamento externo inferior como 0.
  * a propriedade `display` com o valor `flex`: define que o elemento deve ser exibido como um flex container.
  * a propriedade `align-items` com o valor `center`: define que os itens devem ser alinhados verticalmente ao centro.
* para a _tag_ **a** dentro de **nav**
  * a propriedade `text-decoration` com o valor `none`: define que o texto não deve ter decoração.
  * a propriedade `color` com o valor `#fff`: define a cor do texto como branco.

# Adicionando um estilo no MoviesView.vue

Vamos adicionar um estilo no componente `MoviesView.vue` para apresentar a lista de gêneros de forma mais agradável. Para isso, vamos alterar o bloco `template` do arquivo `MoviesView.vue`, para o seguinte conteúdo:

```html
<template>
  <h1>Filmes</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" class="genre-item">
        {% raw %}{{ genre.name }}{% endraw %}
    </li>
  </ul>
</template>
```

Note que nesse caso, alteramos o título `h1` e adicionamos uma classe `genre-list` na lista `ul` e uma classe `genre-item` nos itens da lista (`li`). 

Em seguida, vamos adicionar o seguinte estilo no bloco `style` do arquivo `MoviesView.vue`:

```css
<style scoped>
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.genre-item {
  background-color: #387250;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}
</style>
```

Nesse caso, criamos três regras CSS:
* para a classe `.genre-list`:
  * a propriedade `display` com o valor `flex`: define que o elemento deve ser exibido como um flex container.
  * a propriedade `justify-content` com o valor `center`: define que os itens devem ser alinhados horizontalmente ao centro.
  * a propriedade `flex-wrap` com o valor `wrap`: define que os itens devem ser quebrados em linhas.
  * a propriedade `gap` com o valor `2rem`: define o espaçamento entre os itens como 2 vezes o tamanho da fonte.
  * a propriedade `list-style` com o valor `none`: define que a lista não deve ter marcadores.
* para a classe `.genre-item`:
  * a propriedade `background-color` com o valor `#387250`: define a cor de fundo do elemento como verde.
  * a propriedade `border-radius` com o valor `1rem`: define o raio da borda como 1 vez o tamanho da fonte.
  * a propriedade `padding` com o valor `0.5rem 1rem`: define o espaçamento interno como 0.5 vezes o tamanho da fonte na vertical e 1 vez o tamanho da fonte na horizontal.
  * a propriedade `color` com o valor `#fff`: define a cor do texto como branco.
* para a pseudo-classe `.genre-item:hover`, quando o mouse estiver sobre o elemento:
  * a propriedade `cursor` com o valor `pointer`: define que o cursor do mouse deve ser alterado para um ponteiro.
  * a propriedade `background-color` com o valor `#4e9e5f`: define a cor de fundo do elemento como verde mais escuro.
  * a propriedade `box-shadow` com o valor `0 0 0.5rem #387250`: define uma sombra ao redor do elemento.


# Adicionando um estilo no TvView.vue

As alterações no arquivo `TvView.vue` são muito semelhantes às alterações no arquivo `MoviesView.vue`. Vamos alterar o bloco `template` e `style` do arquivo `TvView.vue`, para o seguinte conteúdo:

```html
<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" class="genre-item">
        {% raw %}{{ genre.name }}{% endraw %}
    </li>
  </ul>
</template>

<style scoped>
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.genre-item {
  background-color: #5d6424;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-self: center;
  color: #fff;
  display: flex;
  justify-content: center;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #7d8a2e;
  box-shadow: 0 0 0.5rem #5d6424;
}
</style>
```

Note que as únicas diferenças em relaçao ao exemplo do `MovieView.vue` são as cores utilizadas.

    <span style="display: flex; justify-content: space-between;"><span>[&lt; TMDB: adicionar o vue-router](tmdb-adicionar-vue-router "Anterior")</span> <span>[TMDB: Listando os filmes &gt;](tmdb-listando-filmes "Próximo")</span></span>