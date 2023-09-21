---
title: "Adicionar o Vue-router"
permalink: /axios/tmdb-adicionar-vue-router
---

# Adicionar o Vue-router

Nesta etapa, vamos adicionar o Vue-router ao projeto. Para isso, vamos executar o seguinte comando no terminal:

```
npm install vue-router
```

Em seguida, vamos criar o arquivo `src/router/index.js` com o seguinte conteúdo:

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import('../views/TV.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

No exemplo acima, estamos criando um roteador com três rotas:
* `/`: rota para a página inicial
* `/filmes`: rota para a página de filmes
* `/tv`: rota para a página de programas de TV


No arquivo `src/main.js`, vamos importar o Vue-router e adicionar o router ao projeto:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
```

Nesse caso, estamos adicionando o suporte ao Vue-router ao projeto e, em seguida, montando o aplicativo.

# Criando a página Home

Nesta etapa, vamos criar a página Home. Para isso, vamos criar o arquivo `src/views/Home.vue` com o seguinte conteúdo:

```html
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
```

Nesse caso é apenas uma página com o título "Home", que será aprimorara ao longo do tutorial.

# Separando a listagem de gêneros em duas views

Nesta etapa, vamos separar a listagem de gêneros em duas views: uma para filmes e outra para programas de TV.

## Criando a página para gêneros de filmes

Para criar a página para gêneros de filmes, vamos criar o arquivo `src/views/Movies.vue` com o seguinte conteúdo:

```html
<script setup>
import { ref, onMounted } from 'vue'
import api from './plugins/axios'

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})
</script>
<template>
  <div>
    <h1>Gêneros de filmes</h1>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        {% raw %}{{ genre.name }}{% endraw %}
      </li>
    </ul>
  </div>
</template>
```

Note que estamos utilizando o `axios` como um plugin, conforme apresentado em aulas anteriores. Também aproveitamos a mesma parte de código que já tinha sido anteriormente desenvolvida.

## Criando a página para gêneros de programas de TV

Para criar a página para gêneros de programas de TV, vamos criar o arquivo `src/views/TV.vue` com o seguinte conteúdo:

```html
<script setup>
import { ref, onMounted } from 'vue'
import api from './plugins/axios'

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/tv/list?language=pt-BR')
  genres.value = response.data.genres
})
</script>

<template>
  <div>
    <h1>Gêneros de programas de TV</h1>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        {% raw %}{{ genre.name }}{% endraw %}
      </li>
    </ul>
  </div>
</template>
```

Note que o exemplo é muito semelhante ao anterior, com a diferença de que estamos buscando os gêneros de programas de TV.

# Adicionando o menu de navegação

Nesta etapa, vamos adicionar o menu de navegação. Para isso, vamos alterar o arquivo `src/App.vue` para o seguinte conteúdo:

```html
<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  column-gap: 2rem;
}
</style>
```

Note que estamos utilizando o componente `RouterLink` para criar os links de navegação. Também estamos utilizando o componente `RouterView` para indicar onde o conteúdo da página será exibido. Ainda, fizemos uma pequena estilização para o menu de navegação, para que os links fiquem alinhados à esquerda e com um espaçamento entre eles. Note que usamos o atributo `scoped` para que o estilo seja aplicado apenas ao componente atual. 

<span style="display: flex; justify-content: space-between;"><span>[&lt; TMBD no Vue](tmdb-no-vue "Anterior")</span> <span>[Ajustes de estilos CSS &gt;](tmdb-ajustes-estilos "Próximo")</span></span>