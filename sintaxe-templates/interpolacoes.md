---
title: 'Sintaxe de templates - Interpolações'
description: Conceitos de interpolações no VueJs
permalink: /sintaxe-templates/interpolacoes
---

# Interpolações

Esta seção apresenta as interpolações de texto, HTML puro e expressões JavaScript.

## Interpolação de texto

A interpolação de texto é a forma mais básica de renderização de dados. Ela permite a renderização de dados em texto simples. Para isso, basta usar a sintaxe `{% raw %}{{ variavel }}{% endraw %}`, também conhecida como _mustache_. Considere o exemplo abaixo:

```html
<span>Valor do contador: {% raw %}{{contador}}{% endraw %}</span>
```

O código acima renderiza o valor da variável `contador` no elemento `<span>`. Se o valor da variável `contador` for `10`, o código acima será renderizado como:

```html
<span>Valor do contador: 10</span>
```

## HTML puro

O padrão de interpolação de texto não é adequado para renderizar HTML puro. Para isso, o VueJs oferece a diretiva `v-html`. Considere o exemplo abaixo:

```html
<script setup>
  const rawHtml = '<span style="color: red">Este é um texto em vermelho</span>';
</script>
<template>
  <p>Usando interpolação de textos: {% raw %}{{rawHtml}}{% endraw %}</p>
  <p>Usando v-html: <span v-html="rawHtml"></span></p>
</template>
```

O código acima renderiza o seguinte HTML:

<div style="padding:10px;background-color: #f8f8f8;color:#000">
Usando interpolação de textos: &lt;span style="color: red"> Este é um texto em vermelho &lt;/span>
<p>Usando v-html: <span style="color: red">Este é um texto em vermelho</span></p>
</div>

Neste exemplo, a interpolação de texto renderiza o HTML como texto, enquanto a diretiva `v-html` renderiza o HTML como HTML. No segundo caso, o conteúdo do elemento `<span>` é renderizado com o valor de `rawHtml` e interpretado como HTML puro.

**Nota**: No VueJS, o atributo `v-html` é chamado de _diretiva_. Diretivas são atributos especiais que começam com `v-` e que são usados para modificar o comportamento de um elemento. Diretivas são usadas para renderizar dados, modificar o comportamento de um elemento, ou modificar o comportamento de um elemento de acordo com o estado da aplicação. As diretivas serão abordadas em detalhes em outro momento.

## Expressões JavaScript

O VueJs permite a renderização de expressões JavaScript. Para isso, basta usar a sintaxe `{% raw %}{{ expressao }}{% endraw %}`. As expressões JavaScript são avaliadas em tempo de execução, ou seja, o resultado é renderizado no template de acordo com o valor da expressão no momento da renderização. Considere o exemplo abaixo:

```html
<script setup>
  const numero = 1;
  const ok = true;
  const mensagem = 'programar';
</script>

<template>
  {% raw %} {{ numero + 1 }} <span><br /></span> {{ ok ? 'Sim' : 'Não' }}
  <span><br /></span>
  {{mensagem.split('').reverse().join('') }} {% endraw %}
</template>
```

As expressões acima são avaliadas como uma expressão Javascript e o resultado é renderizado no template. No primeiro caso, o resultado é `2`, no segundo caso, o resultado é `Sim`, e no terceiro caso, o resultado é `ramargorp`.

Nos templates, você pode usar qualquer expressão JavaScript válida. Isso inclui operadores aritméticos, lógicos, condicionais, até funções JavaScript, como `Math.max()`, `Math.min()`, etc. As expressões JavaScript podem ser usadas nos seguintes lugares:

- Interpolação de texto
- Em qualquer diretiva Vue (atributos que começam com `v-`)

Note que são permitidas apenas expressões JavaScript simples. Não é possível usar declarações de variáveis, bem como controles de fluxo como `if`, `for`, etc.

Por fim, é possível invocar funções JavaScript em templates. Considere o exemplo abaixo:

```html
<script setup>
  const mensagem = 'programar';

  function inverter(texto) {
    return texto.split('').reverse().join('');
  }
</script>
<template>
  <p>{% raw %}{{ inverter(mensagem) }}{% endraw %}</p>
</template>
```

No exemplo acima, a função `inverter()` é invocada em um template. O resultado é renderizado no elemento `<p>`. Nesse caso, o resultado é `ramargorp`.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](intro.html 'Início')</span> <span>[Diretivas &gt;](diretivas.html 'Próximo')</span></span>
