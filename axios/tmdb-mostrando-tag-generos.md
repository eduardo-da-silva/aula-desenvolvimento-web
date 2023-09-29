---
title: "Visualizar ícone de carregando"
permalink: /axios/tmdb-mostrando-tag-generos
---

# Mostrando a tag de gêneros

Nos exemplos anteriores, foram exibidos apenas os `ids` dos gêneros na listagem de filmes (e programas de TV). Neste exemplo, vamos exibir a tag de cada gênero na listagem. Para isso, vamos alterar o método `listMovies` para que ele substitua o `id` do gênero pelo nome do gênero.

Inicialmente, vamos criar uma função que retorna o nome do gênero a partir do `id` do gênero. Para isso, vamos abrir o arquivo `MoviesView.vue` e adicionar o seguinte conteúdo no bloco `script`:

```html
<script setup>

const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name
```

Note que a função `getGenreName` recebe o `id` do gênero como parâmetro e retorna o nome do gênero. Para isso, usamos a função `find` do JavaScript para encontrar o gênero com o `id` informado e retornar o nome do gênero.

Esse código poderia ser escrito de uma forma diferente, um pouco mais detalhada, como segue:

```html
<script setup>

  function getGenreName(id) {
    const genero = genres.value.find((genre) => genre.id === id);
    return genero.name;
  }
```

Você pode escolher a forma que preferir. O importante é entender o que está sendo feito e usar apenas uma das formas.

Agora, vamos alterar a listagem de filmes para que ele substitua o `id` do gênero pelo nome do gênero. Para isso, vamos abrir o arquivo `MoviesView.vue` e alterar o seguinte conteúdo no bloco `template`:

```html
<p class="movie-genres">
  <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)">
    {% raw %}{{ getGenreName(genre_id) }} {% endraw %}
  </span>
</p>
```

Note que localizamos a tag `p` com a classe `movie-genres` e substituímos o conteúdo `{% raw %}{{ movie.genre_ids }} {% endraw %}` pela tag `span` acima. No caso do exemplo, a tag `span` é criada para cada `id` de gênero do filme (comportamento garantido pelo `v-for`). Além disso, adicionamos um `listener` ao evento `click` da tag `span` que chama o método `listMovies` passando o `id` do gênero como parâmetro. Por fim, adicionamos o conteúdo `{% raw %}{{ getGenreById(genre_id) }}{% endraw %}` que exibe o nome do gênero a partir do `id` do gênero.

Por fim, vamos fazer uma estilização para a exibição dos gêneros. Para tal, vamos editar o bloco `style` do arquivo `MoviesView.vue` e adicionar o seguinte conteúdo:

```css
.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}
``` 

Note que a classe `.movie-genres` já existia no bloco `style` do arquivo `MoviesView.vue`. Neste caso, apenas alteramos o valor do atributo `display` para `flex` e adicionamos os demais atributos para que os gêneros sejam exibidos em uma única linha, com um pequeno espaçamento entre eles.


# Formatando a data para o padrão brasileiro

Neste exemplo, vamos alterar a forma como a data de lançamento dos filmes é exibida. Para isso, vamos abrir o arquivo `MoviesView.vue` e alterar o seguinte conteúdo no bloco `template`:

```html
{% raw %}
<p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
{% endraw %}
```

Note que localizamos a tag `p` com a classe `.movie-release-date` e substituímos o conteúdo `{{ movie.release_date }}` pelo conteúdo `{% raw %}{{ formatDate(movie.release_date) }}{% endraw %}`. Além disso, vamos adicionar o seguinte conteúdo no bloco `script`:

```javascript
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
```

Note que criamos uma função `formatDate` que recebe a data de lançamento como parâmetro e retorna a data formatada para o padrão brasileiro. Para isso, usamos a função `toLocaleDateString` do JavaScript para formatar a data para o padrão brasileiro. Sugiro colocar a função `formatDate` logo após a função `getGenreName`.

<span style="display: flex; justify-content: space-between;"><span>[&lt; TMDB: visualizar carregando](tmdb-visualizar-carregando "Anterior")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>