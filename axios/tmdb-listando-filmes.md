---
title: "Listando filmes"
permalink: /axios/tmdb-listando-filmes
---

# Listando filmes

Vamos agora listar os filmes ao clicar no gênero. Para isso, vamos alterar o componente `MoviesView.vue` para que ele liste os filmes ao clicar no gênero. Inicialmente, vamos adicionar um `listener` ao evento `click` do elemento `li` que contém o gênero. Para isso, vamos alterar o bloco `template` do arquivo `MoviesView.vue` para o seguinte conteúdo:

```html
<template>
...
<li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)">
    {{ genre.name }}
</li>
... 
</template>
```

Note que adicionamos o `listener` ao evento `click` do elemento `li` que contém o gênero. Esse `listener` chama o método `listMovies` passando o `id` do gênero como parâmetro. Além disso, as demais partes do código permanecem inalteradas. Agora, vamos adicionar o método `listMovies` no bloco `script` do arquivo `MoviesView.vue`:

```html
<script setup>
...
const movies = ref([]);

const listMovies = async (genreId) => {
    const response = await api.get('discover/movie', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    });
    movies.value = response.data.results
};
...
</script>
```

Neste exemplo, criamos uma variável reativa `movies` que armazena a lista de filmes. Além disso, criamos o método `listMovies` que recebe o `id` do gênero como parâmetro (chamado de `genreId`). Esse método faz uma requisição para a rota `discover/movie` da API do TMDB passando o `genreId` como parâmetro. Em seguida, o método atribui a lista de filmes retornada pela API à variável reativa `movies`. As demais partes do código permanecem inalteradas. Agora, vamos alterar o bloco `template` do arquivo `MoviesView.vue`, adicionando o seguinte conteúdo, depois de fechar a tag `</ul>`:

```html
<div class="movie-list">
  <div v-for="movie in movies" :key="movie.id" class="movie-card">
    {% raw %}
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ movie.release_date }}</p>
      <p class="movie-genres">{{ movie.genre_ids }}</p>
    </div>
    {% endraw %}
  </div>
</div>
```

Neste caso, criamos um elemento `div` com a classe `movie-list` que contém um elemento `div` para cada filme (comportamento garantido pelo `v-for`). Cada elemento `div` com a classe `movie-card` contém:
* uma imagem com o cartaz do filme, 
* um elemento `div` com a classe `movie-details` que contém:
  * o título, 
  * a data de lançamento e 
  * os gêneros do filme. 
Note que utilizamos a interpolação para definir o valor do atributo `src` da imagem. Além disso, utilizamos a interpolação para definir o valor dos textos dos elementos `p` que contém o título, a data de lançamento e os gêneros do filme. 

Agora, vamos adicionar o seguinte estilo no bloco `style` do arquivo `MoviesView.vue`:

```css

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
```

Neste caso, definimos 5 regras de estilos CSS:
* para o elemento `div` com a classe `movie-list`
  * a propriedade `display` com o valor `flex`: define que o elemento deve ser exibido como um flex container.
  * a propriedade `flex-wrap` com o valor `wrap`: define que os elementos devem ser exibidos em várias linhas.
  * a propriedade `gap` com o valor `1rem`: define o espaçamento entre os elementos como 1 vez o tamanho da fonte.
* para o elemento `div` com a classe `movie-card`
  * a propriedade `width` com o valor `15rem`: define a largura do elemento como 15 vezes o tamanho da fonte.
  * a propriedade `height` com o valor `30rem`: define a altura do elemento como 30 vezes o tamanho da fonte.
  * a propriedade `border-radius` com o valor `0.5rem`: define o raio da borda como 0.5 vezes o tamanho da fonte.
  * a propriedade `overflow` com o valor `hidden`: define que o conteúdo que ultrapassar o tamanho do elemento deve ser ocultado.
  * a propriedade `box-shadow` com o valor `0 0 0.5rem #000`: define um sombreamento de 0.5 vezes o tamanho da fonte.
* para a imagem
  * a propriedade `width` com o valor `100%`: define a largura da imagem como 100% do tamanho do elemento pai.
  * a propriedade `height` com o valor `20rem`: define a altura da imagem como 20 vezes o tamanho da fonte.
  * a propriedade `border-radius` com o valor `0.5rem`: define o raio da borda como 0.5 vezes o tamanho da fonte.
  * a propriedade `box-shadow` com o valor `0 0 0.5rem #000`: define um sombreamento de 0.5 vezes o tamanho da fonte.
* para o elemento `div` com a classe `movie-details`
  * a propriedade `padding` com o valor `0 0.5rem`: define o espaçamento interno como 0 vezes o tamanho da fonte na vertical e 0.5 vezes o tamanho da fonte na horizontal.
* para o elemento `p` com a classe `movie-title`
  * a propriedade `font-size` com o valor `1.1rem`: define o tamanho da fonte como 1.1 vezes o tamanho da fonte.
  * a propriedade `font-weight` com o valor `bold`: define o peso da fonte como negrito.
  * a propriedade `line-height` com o valor `1.3rem`: define a altura da linha como 1.3 vezes o tamanho da fonte.
  * a propriedade `height` com o valor `3.2rem`: define a altura do elemento como 3.2 vezes o tamanho da fonte.

Por fim, faremos uma pequena alteração na definação de estilo da classe `.genre-list` para adicionar uma margem inferior, como segue:

```css
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}
```

Note que nesse caso adicionamos a propriedade `margin-bottom` com o valor `2rem` para definir uma margem inferior de 2 vezes o tamanho da fonte.

# Exercícios

Fazer a listagem de programas de TV ao clicar no gênero. Note que no caso dos programas de TV, a rota da API é `discover/tv` e o parâmetro para filtrar por gênero é `with_genres`. Além disso, o nome do campo que contém o título do programa de TV é `name`, o nome original é `original_name` e o nome do campo que contém a data de lançamento é `first_air_date`.

<span style="display: flex; justify-content: space-between;"><span>[&lt; TMDB: ajustes nos estilos](tmdb-ajustes-estilos "Anterior")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>