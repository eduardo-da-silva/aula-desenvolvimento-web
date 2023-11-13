---
title: 'Enfatizando o gênero atual'
permalink: /axios/tmdb-enfatizando-genero-atual
---

# Enfatizando o gênero atual

Nessa seção, vamos aprender a enfatizar o gênero atual selecionado. Para isso, vamos usar o `store` de gêneros que criamos anteriormente e vamos adicionar uma classe CSS para enfatizar o gênero atual.

## Alterando o store de gêneros

Para poder enfatizar o gênero atual que está selecionado, vamos inicialmente editar o `store` que manipula os dados de gênero, no arquivo `@/store/genre.js`. Para isso, vamos adicionar uma nova propriedade chamada `currentGenre` que vai armazenar o gênero atual selecionado e as funções para manipular essa propriedade.

Inicialmente, vamos substituir a definição de estado pela seguinte:

```js
const state = reactive({
  genres: [],
  currentGenreId: null,
});
```

Note que agora temos uma propriedade chamada `currentGenreId` que vai armazenar o `id` do gênero atual selecionado. Em seguida, vamos adicionar o seguinte `getter` para ler o valor dessa propriedade:

```js
const currentGenreId = computed(() => state.currentGenreId);
```

Nesse caso, estamos usando um `getter` computado, pois queremos que o valor seja atualizado automaticamente quando a propriedade `currentGenreId` for alterada. Por fim, faremos uma `action` para alterar o valor dessa propriedade:

```js
const setCurrentGenreId = (genreId) => {
  state.currentGenreId = genreId;
};
```

Nesse exemplo, estamos usando uma função para alterar o valor da propriedade `currentGenreId` para o valor passado como parâmetro. Agora, basta substituir o retorno da função `defineStore` pelo seguinte:

```js
return {
  genres,
  getAllGenres,
  getGenreName,
  currentGenreId,
  setCurrentGenreId,
};
```

Note que estamos retornando a propriedade computada `currentGenreId` e a função `setCurrentGenreId`.

## Alterando o componente MoviesView.vue

Inicialmente, vamos alterar a função `listMovies` para que ela altere o valor da propriedade `currentGenreId` da `store` de gêneros. Para isso, vamos adicionar o seguinte código no bloco `script`:

```js
const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  movies.value = response.data.results;
  isLoading.value = false;
};
```

Note que, antes de fazer a requisição para a API, chamamos a função `setCurrentGenreId` da `store` de gêneros passando o `id` do gênero selecionado como parâmetro. Em seguida, mantemos o restante do código inalterado.

Agora, vamos alterar o bloco `template` para que ele use a propriedade `currentGenreId` da `store` de gêneros. Para isso, vamos alterar os seguintes códigos no bloco `template`:

```html
  <li
    v-for="genre in genreStore.genres"
    :key="genre.id"
    @click="listMovies(genre.id)
    class="genre-item"
    :class="{ active: genre.id === genreStore.currentGenreId }"
  >
  {% raw %}
    {{ genre.name }}
  {% endraw %}
  </li>
```

e também

```html
<span
  v-for="genre_id in movie.genre_ids"
  :key="genre_id"
  @click="listMovies(genre_id)"
  :class="{ active: genre_id === genreStore.currentGenreId }"
>
  {% raw %} {{ genreStore.getGenreName(genre_id) }} {% endraw %}
</span>
```

Por fim, vamos adicionar a seguinte classe CSS no bloco `style`:

```css
.active {
  background-color: #67b086;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #abc322;
  color: #000;
  font-weight: bolder;
}
```

<span style="display: flex; justify-content: space-between;"> <span> [&lt; TMDB: Gerenciamento de estados com o Pinia](tmdb-gerenciamento-estados-com-pinia 'Anterior')</span> <span>[Mostrando detalhes do filme &gt;](tmdb-mostrando-detalhes-filme 'Próximo')</span></span
