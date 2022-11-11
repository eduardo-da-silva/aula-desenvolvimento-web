---
title: "Variáveis reativas"
permalink: /reatividade/variaveis-reativas
---

# Declarando variáveis reativas

Como vimos anteriormente, existem três formas de declarar reatividade em um componente VueJS: `reactive`, `ref` e `$ref`. Nesta etapa, vamos estudar cada uma dessas formas. A primeira forma, `reactive`, embora seja muito comum não é a mais recomendada, devido a algumas restrições que ela possui. Por outro lado, embora o uso da função `$ref()` seja o mais simples e direto, ainda está em fase experimental. Por isso, neste curso, vamos focar no uso da função `ref()`.

## Declarando variável reativas usando ref

A função `ref` é a forma mais usual de declarar uma variável reativa. Ela recebe um valor como parâmetro e retorna um objeto que possui uma propriedade `value` que contém o valor passado como parâmetro. Veja o exemplo abaixo:

```html
<script setup>
import { ref } from 'vue'

const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>

<template>
    <button @click="incrementar">{% raw %}{{ contador }} {% endraw %}</button>
</template>
```

No exemplo acima, a variável `contador` é declarada usando a função `ref`. A variável `contador` é um objeto que possui uma propriedade `value` que contém o valor passado como parâmetro. Quando o botão é clicado, a função `incrementar` é chamada e o valor da propriedade `value` do objeto `contador` é incrementado. Como o objeto `contador` é reativo, o valor do botão é atualizado automaticamente.

Abaixo, alguns exemplos de declaração de variáveis reativas usando a função `ref`:

```js
import { ref } from 'vue'
const nome = ref('João')                // string
const idade = ref(30)                   // number
const preco = ref(10.5)                 // number
const ativo = ref(true)                 // boolean
const frutas = ref(['maçã', 'banana'])  // array de strings
const pessoa = ref({                    // objeto
  nome: 'João',
  idade: 30,
  ativo: true
})

const pessoa1 = {                       // objeto não reativo
  nome: 'João',
  idade: 30,
  ativo: true
}
const pessoa2 = {                       // objeto não reativo
  nome: 'Maria',
  idade: 25,
  ativo: true
}

const pessoas = ref([pessoa1, pessoa2])  // array de objetos
```

<!-- ## Declarando variável reativas usando $ref

Uma desvantagem do uso de funções `ref()` é que elas requerem o uso das propriedades `value` para acessar o valor da variável reativa. Para evitar esse problema, podemos usar a função `$ref()`, também conhecido como transformação de reatividade. O uso de funções `$ref` é muito semelhante ao uso de funções ref. Veja o exemplo abaixo:

```html
<script setup>
let contador = $ref(0)

function incrementar() {
  contador++
}
</script>

<template>
    <button @click="incrementar">{{ contador }}</button>
</template>
```

No exemplo acima, a variável `contador` é declarada usando a função `$ref`. Note que a variável foi criada usando o comando `let` e não o `const`. Diferente do exemplo anterior, usando `ref()` ao invocar a função `$ref()`, não é necessário acessar a propriedade `value` para acessar o valor da variável reativa. Isso deixa o código mais simples e mais fácil de entender.

Além disso, não é necessário importar a função `$ref` do VueJS, pois ela é uma função global. Isso significa que ela pode ser usada em qualquer componente VueJS. -->

## Uso nas templates e outras considerações

Embora já tenhamos apresentado exemplos anteriormente, note que para acessar o valor de uma variável reativa, é necessário usar simplesmente a sintaxe `{{ variavel }}`, como qualquer variável. Mesmo no caso das variáveis definidas usando `ref()`, não é necessário acessar a propriedade `value` para acessar o valor da variável reativa, na parte de template.

<!-- Também, você pode usar as duas formas de declaração, tanto `ref()` quanto `$ref()`, em qualquer parte do componente. -->

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. "Início")</span> <span>[Propriedades Computadas &gt;](propriedades-computadas.html "Próximo")</span></span>