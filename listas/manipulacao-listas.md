---
title: "Manipulação de listas"
permalink: /listas/manipulacao-listas
---

# Manipulação de listas

É comum precisarmos adicionar, remover ou atualizar elementos de uma lista. O VueJS oferece uma forma simples de manipular listas de dados.

## Adicionando elementos

Para adicionar um elemento a uma lista, basta usar o método `push` do array. O método `push` adiciona um elemento ao final do array. Veja o exemplo abaixo:

```html
<script setup>
  import { ref } from 'vue'

  const novoItem = ref('')
  const listaCompras = ref(['arroz', 'batata', 'feijão'])
  
  function adicionar {
    listaCompras.value.push(novoItem.value)
    novoItem.value = ''
  }
</script>
<template>
  <input type="text" v-model="novoItem">
  <button @click="adicionar">Adicionar</button>
  <ul>
    <li v-for="item in listaCompras">{% raw %}{{ item }}{% endraw %}</li>
  </ul>
</template>
```

Note uma diferença importante entre o exemplo acima e o exemplo da aula anterior. No exemplo anterior, a lista de compras era uma constante. Agora, a lista de compras é uma variável reativa. Isso significa que, sempre que o valor da variável `listaCompras` for alterado, o VueJS vai atualizar a lista de compras na tela.

Para isso, precisamos usar a função `ref` do VueJS. A função `ref` cria uma variável reativa. A variável reativa é um objeto que contém o valor da variável e uma propriedade `value`. A propriedade `value` contém o valor da variável. Por exemplo, a variável `novoItem` é uma variável reativa. A variável `novoItem` contém a propriedade `value`. A propriedade `value` contém o valor da variável `novoItem`. Veja o exemplo abaixo:

## Removendo elementos

Para remover um elemento de uma lista, basta usar o método `splice` do array. O método `splice` recebe dois parâmetros: o índice do elemento a ser removido e a quantidade de elementos a serem removidos. Veja o exemplo abaixo:

```html
<script setup>
  import { ref } from 'vue'

  const listaCompras = ref(['arroz', 'batata', 'feijão'])
  
  function remover(index) {
    listaCompras.value.splice(index, 1)
  }
</script>
<template>
  <ul>
    <li v-for="(item, index) in listaCompras">{% raw %}{{ item }} {% endraw %}<button @click="remover(index)">Remover</button></li>
  </ul>
</template>
```

## Atualizando elementos

Para atualizar um elemento de uma lista, basta atribuir um novo valor ao elemento. Vamos usar como exemplo, um array de objetos. Veja o exemplo abaixo:

```html
<script setup>
  import { ref } from 'vue'

  const listaCompras = ref([
    { nome: 'arroz', quantidade: 1 },
    { nome: 'batata', quantidade: 2 },
    { nome: 'feijão', quantidade: 3 }
  ])
  
  function incrementar(index) {
    listaCompras.value[index].quantidade++
  }
</script>
<template>
  <ul>
    <li v-for="(item, index) in listaCompras">{% raw %}{{ item.nome }} - {{ item.quantidade }} {% endraw %}<button @click="incrementar(index)">Incrementar</button></li>
  </ul>
</template>
```

Neste exemplo, a lista de compras é um array de objetos. Cada objeto representa um item da lista de compras. Cada item da lista de compras possui duas propriedades: `nome` e `quantidade`. Para atualizar a quantidade de um item, basta incrementar a propriedade `quantidade` do item.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Renderização de elementos de listas](renderizacao-elementos.html "Anterior")</span><span>[Exercícios &gt;](exercicios.html "Próximo")</span></span>