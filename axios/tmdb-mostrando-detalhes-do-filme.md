---
title: 'Mostrando detalhes do filme'
permalink: /axios/tmdb-mostrando-detalhes-do-filme
---

# Mostrando detalhes do filme

Vamos agora, possibilitar a exibição de detalhes de um filme ao clicar em um cartão de filme.

## Criando um store

Vamos criar um arquivo chamado `src/stores/movie.js` e adicionar o seguinte código:

```js
import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { useTemplateStore } from './template';
import api from '@/plugins/axios';

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
  });

  const currentMovie = computed(() => state.currentMovie);

  const getMovieDetail = async (movieId) => {
    const templateStore = useTemplateStore();
    templateStore.setIsLoading(true);
    const response = await api.get(`movie/${movieId}`);
    state.currentMovie = response.data;
    templateStore.setIsLoading(false);
  };

  return { currentMovie, getMovieDetail };
});
```

Note que estamos criando uma _store_ chamada `movie` e estamos retornando a propriedade computada `currentMovie` e a função `getMovieDetail`. A propriedade `currentMovie` vai armazenar o filme atual selecionado e a função `getMovieDetail` vai buscar os detalhes do filme na API e armazenar na propriedade `currentMovie`.

Também, existe uma integração com a `store` de _template_ para que seja possível mostrar o ícone de carregando enquanto os detalhes do filme são buscados na API.

## Alterando o componente MoviesView.vue

Vamos aquivo editar o arquivo `src/views/MoviesView.vue`, procurar para tag `img` com a capa do filme e adicionar um _listener_ para o evento `click` que vai chamar a função `showMovieDetails` passando o `id` do filme como parâmetro. O código deve ficar assim:

```html
<img
  :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
  :alt="movie.title"
  @click="openMovie(movie.id)"
/>
```

Agora, vamos editar o bloco `script` e adicionar o seguinte código:

```js
import { useRouter } from 'vue-router'
const router = useRouter()

...

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}
```

Note que estamos importando o _hook_ `useRouter` do `vue-router` e estamos criando uma função chamada `openMovie` que recebe o `id` do filme como parâmetro. Essa função vai redirecionar o usuário para a rota `MovieDetails` passando o `id` do filme como parâmetro.

## Criando o componente MovieDetailsView.vue

Vamos criar um novo componente chamado `MovieDetailsView.vue`, na pasta `src/views/` e vamos adicionar o seguinte código:

```html
<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useMovieStore } from '@/stores/movie';
  const movieStore = useMovieStore();

  const props = defineProps({
    movieId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
  });
</script>

<template>
  {% raw %}
  <div class="main">
    <div class="content">
      <img
        :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title"
      />

      <div class="details">
        <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
        <p>{{ movieStore.currentMovie.tagline }}</p>
        <p>{{ movieStore.currentMovie.overview }}</p>
        <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
        <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
      </div>
    </div>
  </div>

  <p>Produtoras</p>
  <div class="companies">
    <template
      v-for="company in movieStore.currentMovie.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
  {% endraw %}
</template>

<style scoped>
  .companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>
```

Esse código é um pouco mais complexo, mas não se preocupe, vamos explicar cada parte dele.

Inicialmente, importamos o _hook_ `useMovieStore` da _store_ `movie` e criamos uma variável reativa chamada `movieStore` que vai armazenar a instância da _store_ `movie`.

Em seguida, criamos uma propriedade chamada `movieId` que vai receber o `id` do filme como parâmetro. Essa propriedade é obrigatória e deve ser do tipo `Number`.

Também, criamos um _hook_ `onMounted` que vai chamar a função `getMovieDetail` da _store_ `movie` passando o `id` do filme como parâmetro. Essa função vai buscar os detalhes do filme na API e armazenar na propriedade `currentMovie` da _store_ `movie`.

Por fim, no bloco `template`, usamos a propriedade computada `currentMovie` da _store_ `movie` para mostrar os detalhes do filme. Note que, para acessar a propriedade computada `currentMovie` da _store_ `movie`, usamos a variável reativa `movieStore`.

Nesse exemplo, não foram realizadas muitas estilizações em CSS, mas você pode fazer isso se quiser.

### Alterando as rotas

Vamos editar o arquivo `src/router/index.js` e adicionar a seguinte rota:

```js
{
  path: '/movie/:movieId',
  name: 'MovieDetails',
  component: () => import('@/views/MovieDetailsView.vue'),
  props: true,
},
```

<span style="display: flex; justify-content: space-between;"> <span> [&lt; TMDB: Enfatizando o gênero atual](tmdb-enfatizando-genero-atual 'Anterior')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span

```

```
