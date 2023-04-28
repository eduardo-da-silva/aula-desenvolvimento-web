---
title: "Renderização dos elementos de listas"
permalink: /listas/renderizacao-elementos
---

# Renderização dos elementos de listas

Nessa aula, vamos aprender a renderizar listas de dados. Usamos esse termo para descrever a renderização de arrays e objetos, bem como arrays de objetos. 

## Renderização de arrays de strings 

 Para isso, inicialmente vamos criar um array de strings e renderizar cada item da lista em uma tag `<li>`.

```html
<script setup>
    const items = ['Item 1', 'Item 2', 'Item 3']
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{% raw %} {{ item }} {% endraw %}</li>
  </ul>
</template>
```

Neste exemplo, o array `items` contém três strings. A diretiva `v-for` é usada para iterar sobre os itens do array. A variável `item` é usada para referenciar cada item da lista. A sintaxe `v-for="item in items"` é equivalente a `v-for="(item, index) in items"`. O segundo parâmetro da diretiva `v-for` é o índice do item na lista. O índice é opcional e pode ser omitido. Contudo, como precisamos de um valor único para a propriedade `key`, vamos usar o índice do item na lista.

A propriedade `key` é usada pelo VueJS para identificar cada item da lista e é obrigatória quando usamos a diretiva `v-for`. Sem a propriedade `key`, o VueJS não consegue identificar cada item da lista e não consegue atualizar corretamente a lista quando os dados são alterados.

Para reforçar os conceitos, é importante entender que o elemento `<li>` é renderizado uma vez para cada item da lista. O VueJS renderiza o elemento `<li>` e, em seguida, atualiza o conteúdo do elemento com o valor do item da lista. No exemplo, o elemento `<li>` é renderizado três vezes. A primeira vez, o conteúdo do elemento é atualizado com o valor do primeiro item da lista. A segunda vez, o conteúdo do elemento é atualizado com o valor do segundo item da lista. A terceira vez, o conteúdo do elemento é atualizado com o valor do terceiro item da lista.

Por fim, fizemos a iteração no elemento `<li>`, mas poderíamos ter feito com qualquer outro elemento ou mesmo com um componente. Por exemplo, poderíamos ter feito a iteração no elemento `<p>`.

```html
<script setup>
    const items = ['Item 1', 'Item 2', 'Item 3']
</script>
<template>
    <p v-for="(item, index) in items" :key="index">{% raw %}{{ item }}{% endraw %}</p>
</template>
```

## Renderização de arrays de objetos

Vamos agora renderizar uma lista de objetos. Para isso, vamos criar um array de objetos e renderizar cada item da lista em uma tag `<li>`.

```html
<script setup>
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{% raw %}{{ item.name }}{% endraw %}</li>
  </ul>
</template>
```

Neste exemplo, o array `items` contém três objetos. A diretiva `v-for` é usada para iterar sobre os itens do array. A variável `item` é usada para referenciar cada item da lista. A sintaxe `v-for="item in items"` é equivalente a `v-for="(item, index) in items"`. Contudo, como não precisamos do índice do item na lista, vamos usar a sintaxe mais simples. Porém, ainda precisamos de um valor único para a propriedade `key` e, neste caso, usaremos o valor da propriedade `id` do objeto.

Neste exemplo, o elemento `<li>` é renderizado três vezes. A primeira vez, o conteúdo do elemento é atualizado com o valor da propriedade `name` do primeiro item da lista. A segunda vez, o conteúdo do elemento é atualizado com o valor da propriedade `name` do segundo item da lista. A terceira vez, o conteúdo do elemento é atualizado com o valor da propriedade `name` do terceiro item da lista.

Por fim, fizemos a iteração no elemento `<li>`, mas poderíamos ter feito com qualquer outro elemento ou mesmo com um componente. Por exemplo, poderíamos ter feito a iteração no elemento `<div>`.

```html
<script setup>
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]   
</script>
<template>
    <div v-for="item in items" :key="item.id">
        <p>{% raw %}{{ item.name }}{% endraw %}</p>
    </div>
</template>
```

## Renderização de objetos

Vamos agora renderizar um objeto. Para isso, vamos criar um objeto e renderizar cada propriedade do objeto em uma tag `<li>`.

```html
<script setup>
    const items = {
        id: 1,
        description: 'Item 1',
        price: 10.00
    }
</script>
<template>
  <ul>
    <li v-for="(value, key) in items" :key="key">{% raw %}{{ key }}: {{ value }}{% endraw %}</li>
  </ul>
</template>
```

Neste exemplo, o objeto `items` contém três propriedades. A diretiva `v-for` é usada para iterar sobre as propriedades do objeto. As variáveis `value` e `key` são usadas para referenciar o valor e a chave de cada propriedade do objeto. A sintaxe `v-for="(value, key) in items"` é equivalente a `v-for="(value, key, index) in items"`. Contudo, como não precisamos do índice do item na lista, vamos usar a sintaxe mais simples. Porém, ainda precisamos de um valor único para a propriedade `key` e, neste caso, usaremos a própria chave da propriedade.

Neste exemplo, o elemento `<li>` é renderizado três vezes. A primeira vez, o conteúdo do elemento é atualizado com o valor da propriedade `description` do objeto. A segunda vez, o conteúdo do elemento é atualizado com o valor da propriedade `price` do objeto. A terceira vez, o conteúdo do elemento é atualizado com o valor da propriedade `id` do objeto.

O resultado da renderização é o seguinte:

```html
<ul>
  <li>description: Item 1</li>
  <li>price: 10</li>
  <li>id: 1</li>
</ul>
```

Este exemplo é um pouco diferente dos exemplos anteriores. No exemplo anterior, o objeto `items` era iterado e cada item da lista era renderizado em um elemento `<li>`. Neste exemplo, o objeto `items` é iterado e cada propriedade do objeto é renderizada em um elemento `<li>`. Por isso, o resultado da renderização é diferente.

Por fim, fizemos a iteração no elemento `<li>`, mas poderíamos ter feito com qualquer outro elemento ou mesmo com um componente. Por exemplo, poderíamos ter feito a iteração no elemento `<p>`.

```html
<script setup>
    const items = {
        id: 1,
        description: 'Item 1',
        price: 10.00
    }
</script>
<template>
    <p v-for="(value, key) in items" :key="key">{% raw %}{{ key }}: {{ value }}{% endraw %}</p>
</template>
```

## Renderização de arrays de objetos com objetos aninhados

Vamos agora renderizar uma lista de objetos que contém objetos aninhados. Para isso, vamos criar um array de objetos e renderizar cada item da lista em uma tag `<li>`.

```html
<script setup>
    const items = [
        { id: 1, name: 'Item 1', details: { description: 'Item 1 description', price: 10.00 } },
        { id: 2, name: 'Item 2', details: { description: 'Item 2 description', price: 20.00 } },
        { id: 3, name: 'Item 3', details: { description: 'Item 3 description', price: 30.00 } }
    ]
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <p>{% raw %}{{ item.name }}{% endraw %}</p>
      <p>{% raw %}{{ item.details.description }}{% endraw %}</p>
      <p>{% raw %}{{ item.details.price }}{% endraw %}</p>
    </li>
  </ul>
</template>
```

Neste exemplo, o array `items` contém três objetos. A diretiva `v-for` é usada para iterar sobre os itens do array. A variável `item` é usada para referenciar cada item da lista.

Poderíamos ter feito duas iterações. A primeira iteração seria para iterar sobre os itens do array e a segunda iteração seria para iterar sobre as propriedades do objeto. Veja o exemplo a seguir:

```html
<script setup>
    const items = [
        { id: 1, name: 'Item 1', details: { description: 'Item 1 description', price: 10.00 } },
        { id: 2, name: 'Item 2', details: { description: 'Item 2 description', price: 20.00 } },
        { id: 3, name: 'Item 3', details: { description: 'Item 3 description', price: 30.00 } }
    ]
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <p>{% raw %}Nome: {{ item.name }}{% endraw %}</p>
      <p>Detalhes</p>
      <p v-for="(value, key) in item.details" :key="key">{% raw %}{{ key }}: {{ value }}{% endraw %}</p>
    </li>
  </ul>
</template>
```


<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. "Anterior")</span><span>[Manipulação de listas &gt;](manipulacao-lista.html "Próximo")</span></span>