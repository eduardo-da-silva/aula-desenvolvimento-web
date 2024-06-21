---
title: 'A API TMDB (The Movie Database API)'
permalink: /axios/tmdb-api
---

# A API TMDB (The Movie Database API)

A API TMDB é uma API REST que fornece informações sobre filmes, séries e programas de TV. Ela é uma API pública e gratuita, que pode ser acessada através do endereço [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api).

Para utilizar a API, é necessário criar uma conta no site [https://www.themoviedb.org/](https://www.themoviedb.org/). Após criar a conta, é necessário criar uma chave de acesso (API Key). Para isso, acesse o menu _Settings_ (_Configurações_) e, em seguida, _API_. Clique no botão _Create_ e, em seguida, _Developer_. Dê um nome para a chave e clique em _Create_. A chave será criada e será exibida na tela. Copie a chave e guarde-a em um local seguro. Essa chave será utilizada para acessar a API. A chave que queremos acesso é a que está no campo _Token de Leitura da API_.

# Conhecendo a API

A API TMDB fornece diversas informações sobre filmes, séries e programas de TV. Para acessar essas informações, é necessário fazer uma requisição HTTP para o servidor da API. A API fornece diversas informações, como a lista de filmes em cartaz, a lista de filmes mais populares, a lista de filmes mais bem avaliados, etc. Além disso, é possível obter informações sobre um filme específico, como o título, a sinopse, o elenco, etc.

Na documentação da API, em [https://developer.themoviedb.org/reference/intro/getting-started] (_API Reference_), é possível encontrar no menu lateral os seguintes tópicos, entre outro:

- **Account** (_Conta_): informações sobre como obter detalhes da conta, favoritos, filmes avaliados, etc.
- **Authentication** (_Autenticação_): informações sobre como obter solicitar token de acesso, criar uma sessão, validar uma chave, etc.
- **Certifications** (_Certificações_): informações sobre as classificações indicativas de filmes, séries e programas de TV.
- ...
- **Companies** (_Empresas_): informações sobre as empresas que produzem filmes, séries e programas de TV.
- **Discover** (_Descobrir_): informações sobre como descobrir filmes, séries e programas de TV.
- **Find** (_Encontrar_): informações sobre como encontrar filmes, séries e programas de TV por ID.
- **Genres** (_Gêneros_): informações sobre os gêneros de filmes, séries e programas de TV.
- ...
- **Movies Lists** (_Listas de filmes_): informações sobre como obter listas de filmes em cartaz, populares, melhor avaliados e em lançamento breve.
- **Movies** (_Filmes_): informações sobre como obter detalhes de um filme, elenco, imagens, etc.
- E muitos outros.

# Buscando os gêneros de filmes e programas de TV

Para entender o funcionamento da API, vamos buscar na documentação pelo item _Genres -> Movie List_. Ao acessar a documentação, é possível perceber que a API aceita como parâmetro (_Query Params_) apenas o item "Language". Também na documentação da resposta que será enviada pela API (_Response_) fica definido que o retorno será um objeto JSON com os seguintes campos:

- **genres**: um array de objetos JSON com os seguintes campos:
  - **id**: o id do gênero
  - **name**: o nome do gênero

Também, é possível identificar que o _endpoint_ consultado será o seguinte:

```
https://api.themoviedb.org/3/genre/movie/list
```

Nesse caso, case se deseje buscar os gêneros em língua portuguesa, pode-se utilizar o seguinte _endpoint_:

```
https://api.themoviedb.org/3/genre/movie/list?language=pt-BR
```

visto que _language_ é um dos parâmetros aceitos pela API.

Para testar o seu uso pode ser utilizado o próprio painel lateral da documentação da API. Para isso, basta preencher o campo _Header_ no item _Authorization_ e clicar no botão _Try it!_. O resultado será exibido na tela.

Também pode ser utilizado a extensão RapidAPI do Visual Studio Code, ou qualquer outra extensão ou ferramenta para testar APIs REST. Nesse caso é essencial informar o Token de Leitura da API. Para isso, em _Headers_ adicione um _Header_ **Authorization** com o valor **Bearer {token}**, onde **{token}** é o token de leitura da API.

# Buscando os filmes em cartaz

Para buscar os filmes em cartaz, vamos buscar na documentação pelo item _Movie Lists -> Now Playing_. Ao acessar a documentação, é possível perceber que a API aceita como parâmetros (_Query Params_) os seguintes itens:

- **Language**: o idioma dos dados retornados
- **Page**: o número da página a ser retornada
- **Region**: o país a ser considerado para a busca. No caso do Brasil, esse código é **BR**.

Também na documentação da resposta que será enviada pela API (_Response_) fica definido que o retorno será um objeto JSON com os seguintes campos:

- **dates**: um objeto JSON com os seguintes campos:
  - **maximum**: a data máxima de lançamento dos filmes
  - **minimum**: a data mínima de lançamento dos filmes
- **page**: o número da página retornada
- **results**: um array de objetos JSON com os seguintes campos:
  - **adult**: um booleano que indica se o filme é para adultos
  - **backdrop_path**: o caminho para a imagem de fundo do filme
  - **genre_ids**: um array de inteiros com os ids dos gêneros do filme
  - **id**: o id do filme
  - **original_language**: o idioma original do filme
  - **original_title**: o título original do filme
  - **overview**: a sinopse do filme
  - **popularity**: a popularidade do filme
  - **poster_path**: o caminho para o poster do filme
  - **release_date**: a data de lançamento do filme
  - **title**: o título do filme
  - **video**: um booleano que indica se o filme tem vídeo
  - **vote_average**: a média de votos do filme
  - **vote_count**: o número de votos do filme
- **total_pages**: o número total de páginas
- **total_results**: o número total de resultados

Também, é possível identificar que o _endpoint_ consultado será o seguinte:

```
https://api.themoviedb.org/3/movie/now_playing
```

Nesse caso, case se deseje buscar os filmes em cartaz no Brasil, com retorno em língua portuguesa, pode-se utilizar o seguinte _endpoint_:

```
https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&region=BR
```

Da mesma forma que o exemplo anterior, é possível testar o uso do _endpoint_ no painel lateral da documentação da API, ou utilizando uma extensão ou ferramenta para testar APIs REST. Nesse caso é essencial informar o Token de Leitura da API. Para isso, em _Headers_ adicione um _Header_ **Authorization** com o valor **Bearer {token}**, onde **{token}** é o token de leitura da API.

# Recuperando as imagens

A API TMDB fornece as imagens dos filmes, séries e programas de TV em diversos tamanhos. Para recuperar as imagens, é necessário utilizar o _endpoint_ [https://image.tmdb.org/t/p/{size}/{path}](https://image.tmdb.org/t/p/{size}/{path}), onde **{size}** é o tamanho da imagem e **{path}** é o caminho da imagem. O tamanho da imagem pode ser um dos seguintes:

- **w92**: 92px de largura
- **w154**: 154px de largura
- **w185**: 185px de largura
- **w342**: 342px de largura
- **w500**: 500px de largura
- **w780**: 780px de largura
- **original**: tamanho original da imagem

Já o **{path}** é o caminho da imagem que se deseja buscar. Por exemplo, no caso da listagem dos filmes em cartaz, apresentado anteriormente, o campo **poster_path** contém esse valor.

# Outros recursos

É muito importante navegar pela documentação da API TMDB para conhecer os recursos disponíveis. Além disso, é possível testar o uso da API diretamente na documentação, o que facilita o entendimento do funcionamento da API.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Exemplos de uso](exemplos-de-uso.html 'Anterior')</span> <span>[TMDB no Vue &gt;](tmdb-no-vue.html 'Próximo')</span></span>
