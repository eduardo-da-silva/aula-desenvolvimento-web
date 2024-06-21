---
title: 'Gerenciamento de estados com Pinia'
permalink: /axios/tmdb-gerenciamento-estados-com-pinia
---

# Gerenciamento de estados

Nas aplicações web, é comum que tenhamos que lidar com estados. Por exemplo, em uma aplicação de cadastro de clientes, podemos ter um estado que indica se o cliente está sendo editado ou não. Em uma aplicação de carrinho de compras, podemos ter um estado que indica se o carrinho está vazio ou não. Em uma aplicação de listagem de filmes, podemos ter um estado que indica se os filmes estão sendo carregados ou não, ou mesmo armazenar os filmes ou gêneros que foram carregados.

No VueJS, podemos usar a API de reatividade para gerenciar estados. Contudo, essa abordagem pode se tornar complexa conforme a aplicação cresce. Para facilitar o gerenciamento de estados, podemos usar uma biblioteca chamada [Pinia](https://pinia.esm.dev/), como já estudamos anteriormente.

## Instalação

Para instalar o Pinia, vamos abrir o terminal e executar o seguinte comando:

```bash
npm install pinia
```

## Configuração da aplicação para suportar o Pinia

Vamos editar o arquivo `src/main.js` e adicionar o seguinte código:

```js
import 'vue-loading-overlay/dist/css/index.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');
```

Note que, comparado com o arquivo `src/main.js` anterior, adicionamos apenas a importação do `createPinia` e a chamada do método `app.use(createPinia())`. O método `createPinia` cria uma instância do Pinia e a torna disponível para todos os componentes da aplicação.

## Criando uma store

Podemos dividir o processo de criação de uma _store_ em três etapas:

1. Criar a _store_ usando o método `defineStore`
2. Criar as variáveis reativas e funções que alteram essas variáveis
3. Retornar as variáveis e funções que serão usadas pelos componentes

Para criar uma _store_, vamos criar um arquivo chamado `src/stores/genre.js` e adicionar o seguinte código:

```js
import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useGenreStore = defineStore('genre', () => {
  const state = reactive({
    genres: [],
  });

  const genres = computed(() => state.genres);
  const getGenreName = (id) =>
    state.genres.find((genre) => genre.id === id).name;

  const getAllGenres = async (type) => {
    const response = await api.get(`genre/${type}/list?language=pt-BR`);
    state.genres = response.data.genres;
  };

  return { genres, getAllGenres, getGenreName };
});
```

Note que, para criar a _store_, usamos o método `defineStore` que recebe dois parâmetros: o nome da _store_ e uma função que retorna um objeto com as variáveis reativas e funções que alteram essas variáveis.

No nosso exemplo, criamos uma _store_ chamada `genre` que possui uma variável reativa chamada `genres` e três funções: `getAllGenres`, `getGenreName` e `getGenreName`. A função `getAllGenres` faz uma requisição HTTP para a API do TMDB e armazena os gêneros na variável reativa `genres`. Esta função recebe um parâmetro chamado `type` que indica se a listagem de gêneros será feita com base nos filmes ou nas séries. A função `getGenreName` recebe o id de um gênero e retorna o nome desse gênero.

Note também que a função `defineStore` retorna um objeto com a propriedade computada `genres` e as funções `getAllGenres` e `getGenreName`. No exemplo não retornamos o objeto reativo `state` porque não queremos que ele seja acessado diretamente pelos componentes. Para acessar cada um dos elementos do objeto `state`, vamos usar os _getters_ `genres` e `getGenreName`. Da mesma forma, para alterar o estado da aplicação, vamos usar a _action_ `getAllGenres`.

Por fim, exportamos a _store_ usando o método `useGenreStore`. Esse método é necessário para que o Pinia possa criar uma instância da _store_ e torná-la disponível para os componentes da aplicação.

## Usando a store

Para usar a _store_, vamos editar o arquivo `src/views/MoviesView.vue`. Inicialmente vamos editar o bloco `script` e adicionar o seguinte código:

```js
import { useGenreStore } from '@/stores/genre';

const genreStore = useGenreStore();
```

Note que importamos a _store_ usando o método `useGenreStore` que criamos anteriormente. No mesmo bloco `script` vamos alterar o método `onMounted` para que ele chame a função `getAllGenres` da _store_:

```js
onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  isLoading.value = false;
});
```

No exemplo, ao invocar a função `getAllGenres`, passamos o parâmetro `'movie'` para que a listagem de gêneros seja feita com base nos filmes.

Por fim, vamos alterar o bloco `template` para que ele use a _store_:

```html
<li
  v-for="genre in genreStore.genres"
  :key="genre.id"
  @click="listMovies(genre.id)"
  class="genre-item"
>
  {% raw %} {{ genre.name }} {% endraw %}
</li>
```

No exemplo, alteramos apenas a listagem de gêneros, visto que foi o único elemento que usamos da _store_, e esta é a única _store_ que criamos até o momento. Note que, para acessar a variável reativa `genres` da _store_, usamos o _getter_ `genres`.

Ainda, vamos fazer mais uma alteração no bloco `template`, para buscar o nome do gênero com base no `id` do gênero:

```html
{% raw %}
<span
  v-for="genre_id in movie.genre_ids"
  :key="genre_id"
  @click="listMovies(genre_id)"
>
  {{ genreStore.getGenreName(genre_id) }}
</span>
{% endraw %}
```

Nesse exemplo, usamos a função `getGenreName` para buscar o nome do gênero com base no `id` do gênero. Essa função recebe o `id` do gênero e retorna o nome do gênero e está implementada na _store_ `genre`.

# Exercícios

1. Fazer as alterações necessárias em `TvView.vue` para que a listagem de gêneros seja feita usando a _store_ `genre`. Note que ao chamar a função `getAllGenres` da _store_ `genre`, é necessário passar o parâmetro `'tv'` para que a listagem de gêneros seja feita com base nos filmes.

<span style="display: flex; justify-content: space-between;"><span>[&lt; TMDB: Mostrando a tag gêneros](tmdb-mostrando-tag-generos.html 'Anterior')</span> <span>[TMDB: Enfatizando o gênero atual &gt;](tmdb-enfatizando-genero-atual.html 'Próximo')</span></span>
