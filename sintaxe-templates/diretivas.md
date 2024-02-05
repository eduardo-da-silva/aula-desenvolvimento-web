---
title: 'Sintaxe de templates - Diretivas'
description: Conceitos de diretivas no VueJs
permalink: /sintaxe-templates/diretivas
---

# Diretivas

As diretivas são atributos especiais que começam com `v-`. Elas são usadas para modificar o comportamento de um elemento ou componente. Por exemplo, a diretiva `v-if` é usada para mostrar ou esconder um elemento baseado em uma expressão. Os valores das diretivas são avaliados em tempo de execução, ou seja, o resultado é renderizado no template de acordo com o valor da expressão no momento da renderização.

Em geral, os valores das diretivas são expressões JavaScript. No entanto, algumas diretivas permitem outros valores, como `v-for`, `v-bind`, `v-on` e `v-slot`, que serão abordados em detalhes em outro momento.

Considere o exemplo abaixo:

```html
<script setup>
  const ok = true;
</script>

<template>
  <div v-if="ok">Mostrar</div>
</template>
```

Nesse exemplo, o elemento `<div>` será renderizado se a variável `ok` for avaliada como `true`. Caso contrário, o elemento não será renderizado.

A seguir, veremos algumas diretivas que são usadas com mais frequência.

## Parâmetros ou argumentos

Algumas diretivas permitem que sejam passados parâmetros ou argumentos. Por exemplo, a diretiva `v-bind` é usada para associar um atributo de um elemento a uma expressão. O valor do atributo é atualizado sempre que a expressão for atualizada. Por exemplo:

```html
<script setup>
  const url = 'https://vuejs.org/';
</script>

<template>
  <a v-bind:href="url">Mais informações...</a>
</template>
```

Nesse exemplo, o atributo `href` do elemento `<a>` é atualizado sempre que a variável `url` for atualizada. Inicialmente, o valor do atributo é `https://vuejs.org/`, mas se o valor da variável for alterado, o atributo também será atualizado.

A diretiva `v-bind` pode ser usada de forma abreviada, usando apenas o prefixo `:`. Por exemplo:

```html
<script setup>
  const url = 'https://vuejs.org/';
</script>

<template>
  <a :href="url">Mais informações...</a>
</template>
```

Outro exemplo de diretiva que permite parâmetros é a diretiva `v-on`. Essa diretiva é usada para associar um evento de um elemento a uma expressão. Por exemplo:

```html
<script setup>
  function mostrarAlerta {
    alert('Botão clicado!');
  };
</script>

<template>
  <button v-on:click="mostrarAlerta">Clique aqui</button>
</template>
```

Nesse exemplo, a função `mostrarAlerta` é executada sempre que o botão for clicado. A diretiva `v-on` pode ser usada de forma abreviada, usando apenas o prefixo `@`. Por exemplo:

```html
<script setup>
  function mostrarAlerta {
    alert('Botão clicado!');
  };
</script>
<template>
  <button @click="mostrarAlerta">Clique aqui</button>
</template>
```

## Argumentos dinâmicos

Algumas diretivas permitem que sejam passados argumentos dinâmicos. Por exemplo, a diretiva `v-bind` permite que sejam passados argumentos dinâmicos, como no exemplo abaixo:

```html
<script setup>
  const url = 'https://vuejs.org/';
  const nomeAtributo = 'href';
</script>

<template>
  <a v-bind:[atribnomeAtributouto]="url">Mais informações...</a>
</template>
```

Aqui, `nomeAtributo` é uma variável que contém o nome do atributo que será associado à expressão. Nesse caso, o valor da variável é `href`, mas poderia ser qualquer outro valor, como `src`, `title`, etc. O valor do atributo será atualizado sempre que a variável `nomeAtributo` for atualizada. No caso do exemplo, essa associação será equivalente a `v-bind:href="url"`.

Esse tipo de associação é muito útil quando se deseja associar um atributo a uma expressão, mas o nome do atributo é dinâmico. Da mesma forma, a diretiva `v-on` permite que sejam passados argumentos dinâmicos, como no exemplo abaixo:

```html
<script setup>
  const nomeEvento = 'click';

  function mostrarAlerta {
    alert('Botão clicado!');
  };
</script>

<template>
  <button v-on:[nomeEvento]="mostrarAlerta">Clique aqui</button>
</template>
```

Aqui, `nomeEvento` é uma variável que contém o nome do evento que será associado à expressão. Nesse caso, o valor da variável é `click`, mas poderia ser qualquer outro valor, como `mouseover`, `mouseout`, etc. A função `mostrarAlerta` será executada sempre que o evento for disparado. No caso do exemplo, essa associação será equivalente a `v-on:click="mostrarAlerta"`.

## Modificadores

Algumas diretivas permitem que sejam passados modificadores. Por exemplo, a diretiva `v-on` permite que sejam passados modificadores, como no exemplo abaixo:

```html
<script setup>
  function mostrarAlerta {
    alert('Botão clicado!');
  };
</script>

<template>
  <button v-on:click.stop="mostrarAlerta">Clique aqui</button>
</template>
```

Nesse exemplo, a função `mostrarAlerta` é executada sempre que o botão for clicado. No entanto, o evento `click` não será propagado para os elementos pais. Isso significa que o evento não será disparado para os elementos pais, mesmo que esses elementos tenham um evento associado ao evento `click`.

Um outro exemplo comum é o uso do modificador `.prevent`:

```html
<template>
  <form v-on:submit.prevent="mostrarAlerta">...</form>
</template>
```

Nesse exemplo, a função `mostrarAlerta` é executada sempre que o formulário for submetido. Contudo, o modificador `.prevent` informa ao Vue para chamar o método `event.preventDefault()` no evento `submit`, evitando que o formulário seja submetido.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Interpolações](interpolacoes.html 'Início')</span> <span>[Exemplos &gt;](exemplos.html 'Próximo')</span></span>
