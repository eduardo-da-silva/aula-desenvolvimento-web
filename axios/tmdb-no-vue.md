---
title: "A API TMDB integrada ao Vue"
permalink: /axios/tmdb-no-vue
---

# Objetivo

O objetivo deste tutorial é apresentar como utilizar a API TMDB (The Movie Database API) para buscar informações sobre filmes, séries e programas de TV. Para isso, será utilizado o framework Vue.js e a biblioteca Axios.

A construção será progressiva, de forma que novas formas de organizar os arquivos e de utilizar o Vue.js serão apresentadas ao longo do tutorial.

# Criação do projeto

Para criar o projeto, vamos utilizar o Vite. Para isso, vamos criar uma pasta para esse projeto, por exemplo com o nome `filmes-tmdb`. Em seguida, vamos abrir essa pasta no Visual Studio Code e, no terminal, vamos executar o seguinte comando:

```
npm init vite@latest .
```

Vamos responder às perguntas como já apresentado em aulas anteriores. Neste momento, não adicione ainda nem o Vue Router e nem o Pinia. Faremos isso mais adiante.

## Instalação do Axios

Para instalar o Axios, vamos executar o seguinte comando no terminal:

```
npm install axios
```

# Buscando os gêneros dos filmes e programas de TV

Nesta primeira etapa, vamos fazer apenas uma alteração na página principal para listar os gêneros de filmes e programas de TV.

Inicialmente, vamos abrir o arquivo `App.vue`, e alterá-lo para o seguinte conteúdo:

```html
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer AQUI_COLOCAR O TOKEN DE LEITURA DA API`
    }
  })
  moviesGenres.value = response.data.genres
  response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer AQUI_COLOCAR O TOKEN DE LEITURA DA API`
    }
  })
  TVGenres.value = response.data.genres
})
</script>

<template>
  <h1>Gêneros de filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>
  <hr />
  <h1>Gêneros de programas de TV</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>
</template>
```
Iniciamos importando o `ref` e o `onMounted` do Vue e o `axios`. Em seguida, criamos duas variáveis reativas, `moviesGenres` e `TVGenres`, que serão utilizadas para armazenar os gêneros de filmes e de programas de TV, respectivamente.

Em seguida, utilizamos o `onMounted` para executar uma função quando o componente for montado. Essa função é assíncrona, pois utilizaremos o `await` para aguardar o retorno das requisições à API. Criamos uma variável para armazenar o retorno da chamada à API, e utilizamos o `await` para aguardar o retorno da chamada à API. Em seguida, armazenamos os gêneros de filmes na variável `moviesGenres` e os gêneros de programas de TV na variável `TVGenres`.

Perceba que armazenamos o retorno em uma variável chamada `response`. Essa variável é criada com o `let` pois será reutilizada para armazenar o retorno da chamada à API de programas de TV. O retorno da chamada à API contém um objeto com os seguintes campos:

* **config**: um objeto com a configuração da requisição
* **data**: o corpo da resposta
* **headers**: um objeto com os cabeçalhos da resposta
* **status**: o código de status da resposta
* **statusText**: a mensagem de status da resposta

Por isso utilizamos `response.data` para acessar apenas o corpo da resposta. Nesse caso, conforme a documentação da API, o corpo da resposta é um objeto JSON com os seguintes campos:

* **genres**: um array de objetos JSON com os seguintes campos:
  * **id**: o id do gênero
  * **name**: o nome do gênero

Por isso, utilizamos `response.data.genres` para acessar apenas o array de gêneros.

# Configurando o Axios

Note que no código acima, a chave de leitura da API foi inserida diretamente no código. Isso não é uma boa prática, pois a chave de leitura é um dado sensível que não deve ser exposto. Esse é um dado sensível que deve ser armazenado em um arquivo de configuração, que não deve ser enviado para o repositório. Vamos resolver esse detalhe em aulas posteriores.

No entanto, um outro detalhe no código acima é que em todas as chamadas à API, foi necessário informar o _endpoint_ completo, bem como o cabeçalho _Authorization_. Para evitar repetir essas informações em todas as chamadas à API, vamos configurar o Axios para que ele já inclua essas informações em todas as chamadas à API.

Para isso, vamos criar um arquivo chamado `axios.js` na pasta `src/plugins` (Se a pasta plugins não existir, crie dentro da pasta src). Em seguida, vamos adicionar o seguinte conteúdo:

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer COLOQUE AQUI A CHAVE DE LEITURA DA API`
  }
})

export default api
```

Nesse arquivo, importamos o Axios e criamos uma instância do Axios com o método `create`. Esse método recebe um objeto com as configurações da instância. Nesse caso, definimos a URL base da API e o cabeçalho _Authorization_. Em seguida, exportamos essa instância, chamada de `api`.

## Utilizando o Axios modificado nas chamadas à API

Agora, vamos alterar o arquivo `App.vue` para utilizar o Axios modificado. Para isso, vamos alterar a parte de `script` do arquivo `App.vue` para o seguinte:

```html
<script setup>
import { ref, onMounted } from 'vue'
import api from './plugins/axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await api.get('genre/movie/list?language=pt-BR')
  moviesGenres.value = response.data.genres
  response =  await api.get('genre/tv/list?language=pt-BR')
  TVGenres.value = response.data.genres
})
</script>
```

Note que o arquivo ficou mais sucinto, facilitando a leitura e a manutenção do código.




<span style="display: flex; justify-content: space-between;"><span>[&lt; A API TMDB](tmdb-api "Anterior")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>
