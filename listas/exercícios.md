---
title: "Exercícios"
permalink: /listas/exercicios
---

# Exercícios

Para fixar o conteúdo, vamos resolver alguns exercícios.

## Exercício 1

Faça uma tela que renderize uma lista de cidades. O componente deve receber um array de cidades como propriedade. A lista deve ser renderizada em um elemento `ul`. Cada item da lista deve ser renderizado em um elemento `li`. As cidades iniciais devem ser:
    
    ```js
    [
        'São Paulo',
        'Rio de Janeiro',
        'Belo Horizonte',
        'Salvador',
        'Fortaleza',
        'Curitiba',
        'Manaus',
        'Recife',
        'Porto Alegre',
        'Brasília'
    ]
    ```

## Exercício 2

Usando o mesmo Array do exercício anterior, deve ser renderizada uma lista deve ser renderizada em ordem alfabética. A lista deve ser renderizada em um elemento `ul`. Cada item da lista deve ser renderizado em um elemento `li`. *Dica*: para ordenar um array, você pode usar o método `sort` do array, preferencialmente em uma propriedade computada. 

# Projeto 2

Faça um protótipo de um carrinho de compras. Nesse caso, crie uma lista fixa de produtos, como descrito abaixo:

```js
const produtos = [
    {
        id: 1,
        nome: 'Camiseta',
        preco: 49.90
    },
    {
        id: 2,
        nome: 'Calça',
        preco: 99.90
    },
    {
        id: 3,
        nome: 'Meia',
        preco: 9.90
    },
    {
        id: 4,
        nome: 'Sapato',
        preco: 199.90
    },
    {
        id: 5,
        nome: 'Boné',
        preco: 29.90
    },
    {
        id: 6,
        nome: 'Óculos',
        preco: 99.90
    },
    {
        id: 7,
        nome: 'Relógio',
        preco: 299.90
    },
    {
        id: 8,
        nome: 'Bermuda',
        preco: 79.90
    },
    {
        id: 9,
        nome: 'Cueca',
        preco: 19.90
    },
    {
        id: 10,
        nome: 'Meia',
        preco: 9.90
    }
]
```

O usuário deve poder adicionar os produtos ao carrinho. Para isso, deve ser renderizada uma lista de produtos. O usuário deve poder clicar em um produto para adicioná-lo ao carrinho. O carrinho deve ser renderizado em uma `div` abaixo da listagem dos produtos. Em cada item do carrinho deve ter a opção de adicionar quantidade ou remover o item do carrinho. Ao final, deve ser apresentado o valor total dos itens no carrinho, que pode ser calculado a partir da quantidade de cada item e do preço do produto.

Uma sugestão para a estrutura do objeto do carrinho é:

```js
const carrinho = [
    items: [
        {
            id: 1,
            nome: 'Camiseta',
            preco: 49.90,
            quantidade: 1,
            valorTotal: 49.90
        },
        {
            id: 2,
            nome: 'Calça',
            preco: 99.90,
            quantidade: 2,
            valorTotal: 199.80
        },
        {
            id: 3,
            nome: 'Meia',
            preco: 9.90,
            quantidade: 4,
            valorTotal: 39.60
        }
    ]
    total: 288.30
]
```

Note que o objeto do carrinho possui um atributo `total` que é o valor total dos itens no carrinho. Ainda, note que cada item do carrinho possui um atributo `valorTotal` que é o valor total do item multiplicado pela quantidade. Ainda, esses dois valores não devem ser informados pelo usuário, mas sim calculados a partir dos valores informados. 

Dica: você pode calcular o valor total de cada item da compra ao aumentar ou diminuir a quantidade de itens no carrinho, na mesma função que manipula o incrementar e decrementar item do carrinho.

Dica2: o mesmo pode ser feito com o total da compra, que pode ser recalculado sempre que um item é modificado no carrinho.

Dica3: se você desejar, todos esses cálculos podem ser feitos em propriedades computadas, mas não é obrigatório.


<span style="display: flex; justify-content: space-between;"><span>[&lt; Manipulação de listas](manipulacao-listas.html "Voltar")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>