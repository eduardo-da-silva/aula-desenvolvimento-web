---
title: "Visualizar ícone de carregando"
permalink: /axios/tmdb-visualizar-carregando
---

# Componente para visualizar ícone de carregando

Para facilitar a visualização do ícone de carregando, poderíamos criar um componente para isso, com toda a lógica necessária para exibir o ícone de carregando, bem como os estilos de CSS. Contudo, vamos fazer de uma forma mais simples, usando um componente público já desenvolvido chamado `vue-loading-overlay`. Para isso, vamos instalar esse componente com o seguinte comando no terminal:

```
npm install vue-loading-overlay
```

Em seguida, vamos abrir o arquivo `main.js` e adicionar o seguinte conteúdo na primeira linha:
  
```js
import 'vue-loading-overlay/dist/css/index.css'
```

O restante do arquivo permanece inalterado.

Agora, vamos abrir o arquivo `MoviesView.vue` e adicionar o seguinte conteúdo no bloco `template`, depois da tag `</ul>`:

```html
<loading v-model:active="isLoading" is-full-page />
```

Neste caso, adicionamos o componente `loading` que recebe o valor da variável `isLoading` como parâmetro. Além disso, definimos que o componente deve ocupar toda a página com o parâmetro `is-full-page`. Agora, vamos adicionar o seguinte conteúdo no bloco `script`:

```html
<script setup>
import Loading from 'vue-loading-overlay'

const isLoading = ref(false);
</script>
```

Note que importamos o componente `Loading` do pacote `vue-loading-overlay` e criamos uma variável reativa `isLoading` que indica se o ícone de carregando deve ser exibido ou não. Sugiro que você organize o código de forma que os `import`s fiquem no início do bloco `script` e as variáveis reativas fiquem na sequência, antes da definição das demais funções. 


Agora, vamos alterar o método `listMovies` para que ele altere o valor da variável `isLoading` antes e depois de fazer a requisição para a API, como segue:

```html
<script setup>
...
const listMovies = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
  isLoading.value = false;
};
...
```

Note que apenas fizemos uma pequena alteração na função, adicionando a linha `isLoading.value = true;` antes da chamada à API e a linha `isLoading.value = false;` depois da chamada à API. 



<span style="display: flex; justify-content: space-between;"><span>[&lt; TMDB: ajustes nos estilos](tmdb-ajustes-estilos "Anterior")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>