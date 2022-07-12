layout: page
title: "Exemplos de uso do axios"
permalink: /axios/exemplos-de-uso

# Exemplos de uso

## Importando o axios em um arquivo `.js` ou `.vue`

A forma mais comum para importar o `axios` é:

```javascript
import axios from 'axios'
```

Com isso, o `axios` estará disponível para ser utilizado no arquivo em questão.

## Breve introdução aos verbos REST

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

[&lt; Intro](intro.html "Anterior") 
<span style="display: inline-block;width: 60%"></span>
