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

Com base nisso, podemos considerar um exemplo com a manipulação (armazenado em memória, arquivo ou banco de dados) de um recurso chamado `categorias`. No nosso exemplo, Vamos considerar que ele já está sendo fornecido por um servidor REST.

Nesse caso, teríamos os seguintes _endpoints_:

Endpoint         | Método   | Descrição                                         |
---------        |--------- |-----------                                        |
/categorias      | GET      | Retorna a lista de categorias                     |
/categorias      | POST     | Insere uma nova categoria                         |
/categorias/{id} | GET      | Retorna a categoria com id = {id}                 |
/categorias/{id} | PUT      | Substitui os dados da categoria com com id = {id} |
/categorias/{id} | PATCH    | Altera itens dos dados da categoria com id = {id} |
/categorias/{id} | DELETE   | Remove a categoria com id = {id}                  |


Os exemplo a seguir são fictícios e não consideram um servidor REST real. Em aulas posteriores vamos consultar um servidor REST real.
# O método GET

O método GET é usado para buscar uma representação de um ou mais recursos. Em caso de sucesso, retorna uma representação em JSON e um código de resposta HTTP de 200 (_OK_). Em caso de erro, ele geralmente retorna um 404 (_NOT FOUND_) ou 400 (_BAD REQUEST_).

Vamos considerar, nesse exemplo, que o servidor REST tenha uma entrada de dados com os seguintes dados:

```json
"categorias": [
    {"id": 1, "descricao": "Carros"},
    {"id": 2, "descricao": "Motos"},
    {"id": 3, "descricao": "Caminhões"},
]
```

## Buscando todas as categorias

Caso desejássemos buscar todas as categorias em um servidor, poderíamos ter uma função implementada da seguinte forma:

```javascript
async function buscarTodasAsCategorias() {
    try {
        const resposta = await axios.get('http://ip_e_porta_do_servidor/categorias')
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

No exemplo acima, a função `buscarTodasAsCategorias` busca todas as categorias no servidor e retornaria ao solicitante os dados. No caso do nosso exemplo, seria retornado pela função:

```json
[
    {"id": 1, "descricao": "Carros"},
    {"id": 2, "descricao": "Motos"},
    {"id": 3, "descricao": "Caminhões"},
]
```
Note que é possível enviar opções no método GET, como filtros, paginação, ordenação, etc., que podem ou não estar implementados pelo servidor REST. Daí a importância de uma boa documentação da API disponibilizada.

## Buscando apenas uma categoria pelo `id`

Caso desejássemos buscar apenas uma categoria pelo seu `id`, poderíamos ter uma função implementada da seguinte forma:

```javascript
async function buscarCategoria(id) {
    try {
        const resposta = await axios.get(`http://ip_e_porta_do_servidor/categorias/${id}`)
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

No exemplo acima, a função `buscarCategoria` faz o filtro pelo `id` e retorna ao solicitante a categoria solicitada ou um erro com _status_ 404 (não encontrada). No caso do nosso exemplo, se o solicitante chamasse a função com o parâmetro id=2 `buscarCategoria(2)`, o seguinte resultado seria retornado pela função:

```json
{"id": 2, "descricao": "Motos"}
```

## O método POST

Usamos o POST para adicionar um novo recurso. Nesse caso, adicionaremos uma nova categoria. O exemplo a seguir mostra a implementação de uma nova categoria, que recebe um objeto ``nova_categoria` como parâmetro, que pode ter o seguinte formato:
    
```json
{
    "descricao": "Nova categoria"
}
```

Neste caso, objeto `nova_categoria` deve conter os atributos do recurso `categoria`, como `descricao` no nosso exemplo. Outros atributos poderiam ser adicionados, caso o recurso tenha mais atributos. 

```javascript
async function adicionarCategoria(nova_categoria) {
    try {
        const resposta = await axios.post('http://ip_e_porta_do_servidor/categorias', {nova_categoria})
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

Caso o objeto `nova_categoria` não seja válido, o servidor retornará um erro com _status_ 400 (_BAD REQUEST_). Note também que, como o exemplo do método GET, em caso de sucesso, é retornado o atributo `data` do objeto `resposta` que contém a representação do recurso adicionado. No caso do nosso exemplo, seria retornado pela função:

```json
{"id": 4, "descricao": "Nova categoria"}
```

## Os métodos PUT e PATCH

Os métodos PUT e PATCH são similares. Ambos são utilizados para a atualização de um recurso. No exemplo a seguir, vamos atualizar a categoria com id = 2. Contudo, em geral, usamos o método PUT para substituir todo o objeto, enquanto o método PATCH é utilizado para atualizar apenas alguns atributos. Contudo, o uso dos dois é similar e a diferença acontece principalmente na forma que é implementado no servidor REST. Em alguns caso, o servidor REST pode retornar um erro com _status_ 400 (BAD REQUEST) caso não sejam informados todos os atributos num método PUT. 

No nosso exemplo, modificaremos a descrição de uma nova categoria. Definiremos um objeto com os valores modificados. No nosso exemplo, a variável `categoria` terá o seguinte conteúdo:
    
```json
{
    "id": 2,
    "descricao": "Motocicleta"
}
```

Neste caso, objeto `categoria` deve conter os atributos do recurso `categoria`, como `descricao`. Como no método GET, outros atributos poderiam ser adicionados, caso o recurso tenha mais atributos. 

```javascript
async function alteraCategoria(categoria) {
    try {
        const resposta = await axios.put(`http://ip_e_porta_do_servidor/categorias/${categoria.id}`, {categoria})
        return resposta.data
    } catch(error) {
        console.log(error)
    }
```

Caso o objeto `categoria` não seja válido, o servidor retornará um erro com _status_ 400 (_BAD REQUEST_). Note também que, como o exemplo do método GET, em caso de sucesso, é retornado o atributo `data` do objeto `resposta` que contém a representação do recurso adicionado. No caso do nosso exemplo, seria retornado pela função:

```json
{"id": 2, "descricao": "Motocicleta"}
```

O uso do método PUT seria similar, mas caso o recurso tivesse mais atributos, seria necessário informar todos os valores, senão eles seriam excluídos.


# O método DELETE

Por fim, o método DELETE é utilizado para excluir um recurso. No exemplo a seguir, vamos excluir a categoria com id = 2.

```javascript
async function excluirCategoria(id) {
    try {
        const resposta = await axios.delete(`http://ip_e_porta_do_servidor/categorias/${id}`)
        return resposta.data
    } catch(error) {
        console.log(error)
    }
}
```

Neste caso, o servidor retornará um erro com _status_ 404 (não encontrada) caso o recurso não exista, ou com _status_ 204 (no content) caso a exclusão seja realizada com sucesso.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. "Início")</span> <span>[A API TMDB (Filmes) &gt;](tmdb-api "Próximo")</span></span>
