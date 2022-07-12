---
title: "Exemplos de uso do axios"
permalink: /axios/exemplos-de-uso
---

# Importando o axios em um arquivo `.js` ou `.vue`

A forma mais comum para importar o `axios` é:

```javascript
import axios from 'axios'
```

Com isso, o `axios` estará disponível para ser utilizado no arquivo em questão.

Outro detalhe importante é que faremos todas as nossas chamadas usando `async/await`, já que o `axios` implementa uma biblioteca baseada em promessas, ou seja, assíncrona. É muito comum achar exemplos usando os métodos `then` e `catch` do `Promise`, mas nos nossos exemplos faremos uso, sempre que possível, das chamadas `async/await` 

# Breve introdução aos verbos REST

De forma resumida, os verbos HTTP são os métodos de requisição utilizados para acessar os _endpoints_ de uma API REST. Abaixo, está uma descrição simples (não completa) dos principais verbos disponíveis. 

| Método HTTP   | Descrição                        |
|------------   |-----------                       |
| GET           | Busca um recurso                 |
| POST          | Cria um recurso                  |
| PUT           | Atualiza um recurso              |
| PATCH         | Atualiza parcialmente um recurso |

Com base nisso, podemos considerar um exemplo com a manipulação (armazenado em memória, arquivo ou banco de dados) de um recurso chamado `categorias`. No nosso exemplo, Vamos considerar que ele já está sendo fornecido por um servidor REST, como o apresentado nas aulas anteriores (json-server).

Nesse caso, teríamos os seguintes _endpoints_:

Endpoint         | Método   | Descrição                                         |
---------        |--------- |-----------                                        |
/categorias      | GET      | Retorna a lista de categorias                     |
/categorias      | POST     | Insere uma nova categoria                         |
/categorias/{id} | GET      | Retorna a categoria com id = {id}                 |
/categorias/{id} | PUT      | Substitui os dados da categoria com com id = {id} |
/categorias/{id} | PATCH    | Altera itens dos dados da categoria com id = {id} |
/categorias/{id} | DELETE   | Remove a categoria com id = {id}                  |


Em todos os nossos exemplos a seguir, consideraremos que estamos utilizando o `json-server` como servidor REST. Também, que este servidor está em execução em `http://localhost:4000` e que o arquivo de dados está armazenado em `db/db.json`, no repositório do projeto de backend. 

# O método GET

O método GET é usado para buscar uma representação de um ou mais recursos. Em caso de sucesso, retorna uma representação em JSON e um código de resposta HTTP de 200 (_OK_). Em caso de erro, ele geralmente retorna um 404 (_NOT FOUND_) ou 400 (_BAD REQUEST_).

Vamos considerar, nesse exemplo, que o servidor `json-server` tenha uma entrada de dados com os seguintes dados:

```json
"categorias": [
    {"id": 1, "descrição": "Carros"},
    {"id": 2, "descrição": "Motos"},
    {"id": 3, "descrição": "Caminhões"},
]
```

## Buscando todas as categorias

Caso desejássemos buscar todas as categorias em um servidor, poderíamos ter uma função implementada da seguinte forma:

```javascript
async function buscarTodasAsCategorias() {
    try {
        const resposta = await axios.get('http://localhost:4000/categorias')
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

No exemplo acima, a função `buscarTodasAsCategorias` busca todas as categorias no servidor e retornaria ao solicitante os dados. No caso do nosso exemplo, seria retornado pela função:

```json
[
    {"id": 1, "descrição": "Carros"},
    {"id": 2, "descrição": "Motos"},
    {"id": 3, "descrição": "Caminhões"},
]
```
Note que é possível enviar opções no método GET, como filtros, paginação, ordenação, etc., que podem ou não estar implementados pelo servidor REST. Daí a importância de uma boa documentação da API disponibilizada.

## Buscando apenas uma categoria pelo `id`

Caso desejássemos buscar apenas uma categoria pelo seu `id`, poderíamos ter uma função implementada da seguinte forma:

```javascript
async function buscarCategoria(id) {
    try {
        const resposta = await axios.get(`http://localhost:4000/categorias/${id}`)
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

No exemplo acima, a função `buscarCategoria` faz o filtro pelo `id` e retorna ao solicitante a categoria solicitada ou um erro com _status_ 404 (não encontrada). No caso do nosso exemplo, se o solicitante chamasse a função com o parâmetro id=2 `buscarCategoria(2)`, o seguinte resultado seria retornado pela função:

```json
{"id": 2, "descrição": "Motos"}
```


[&lt; Intro](intro.html "Anterior") 
<span style="display: inline-block;width: 60%"></span>
