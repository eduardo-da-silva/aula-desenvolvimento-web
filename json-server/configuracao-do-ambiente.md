# Criação do servidor

### Criação do projeto

Crie um projeto **node** com o seguinte comando:

```
npm init -y
```

Você terá o seguinte retorno:

```bash
Wrote to [...]/json-server-backend-livraria-eduardo/package.json:

{
  "name": "json-server-backend-livraria-eduardo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Instale o pacote `json-server-relationship`:

```
npm install json-server-relationship
```

### Configuração do servidor NodeJS

Crie um arquivo chamado `server.js`, com o seguinte conteúdo:

```javascript
const jsonServer = require('json-server-relationship');
const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
```

Crie uma pasta chamada `db` e dentro dessa pasta, um arquivo chamado `db.json`:

* Este arquivo tem um formado JSON e contém os dados que serão fornecidos pelo servidor REST
* No exemplo a seguir, criei uma três chaves, que representarão rotas que serão acessadas com os verbos REST API.
  * A primeira chave `categories`, para representar as categorias de livros.
  * A segunda chave `publishers` para representar as editoras. Note que essa chave está vazia, mas já precisa ser criada para poder ser fornecida pelo servidor REST API.
  * A terceira chave `books`, para representar os livros.

```json
{
    "categories": [
        {"id": 1, "description": "Categoria 1"},
        {"id": 2, "description": "Categoria 2"}
    ],
    "publishers": [],
    "books": [
        {"id": 1, "title": "Livro 1", "categoryId": 1, "publisherId": 1},
        {"id": 1, "title": "Livro 2", "categoryId": 2, "publisherId": 1}
    ]
}
```

Edite o arquivo `package.json`, alterando as chaves **main** e **scripts**

* Abaixo está o exemplo do meu arquivo, mas lembre que apenas as chaves **main** e **script** precisam ser alteradas:

```json
{
  "name": "json-server-backend-livraria-eduardo",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",

  "scripts": {
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server-relationship": "^0.14.5"
  }
}
```

### Teste o seu servidor localmente

Agora você já pode testar localmente o seu servidor. Execute o comando:

```
npm run start
```

Um servidor será disponibilizado no endereço `http://localhost:4000`

[&lt; Intro](intro.html "Anterior") 
<span style="display: inline-block;width: 60%"></span>
[Deploy no Heroku &gt;](deploy-no-heroku.html "Próximo") 