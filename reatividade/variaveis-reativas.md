---
title: 'Variáveis reativas'
permalink: /reatividade/variaveis-reativas
---

# Declarando variáveis reativas

Como vimos anteriormente, existem duas formas de declarar reatividade em um componente VueJS: `reactive` e `ref`. Nesta etapa, vamos estudar cada uma dessas formas. A primeira forma, `reactive`, embora seja muito comum não é a mais recomendada, embora seja interessante em alguns cenários. Por isso, neste curso, vamos focar no uso da função `ref()`.

## Declarando variável reativas usando ref

A função `ref` é a forma mais usual de declarar uma variável reativa. Ela recebe um valor como parâmetro e retorna um objeto que possui uma propriedade `value` que contém o valor passado como parâmetro. Veja o exemplo abaixo:

```html
<script setup>
  import { ref } from 'vue';

  const contador = ref(0);

  function incrementar() {
    contador.value++;
  }
</script>

<template>
  <button @click="incrementar">{% raw %}{{ contador }} {% endraw %}</button>
</template>
```

No exemplo acima, a variável `contador` é declarada usando a função `ref`. A variável `contador` é um objeto que possui uma propriedade `value` que contém o valor passado como parâmetro. Quando o botão é clicado, a função `incrementar` é chamada e o valor da propriedade `value` do objeto `contador` é incrementado. Como o objeto `contador` é reativo, o valor do botão é atualizado automaticamente.

Abaixo, alguns exemplos de declaração de variáveis reativas usando a função `ref`:

```js
import { ref } from 'vue';
const nome = ref('João'); // string
const idade = ref(30); // number
const preco = ref(10.5); // number
const ativo = ref(true); // boolean
const frutas = ref(['maçã', 'banana']); // array de strings
```

## O uso da função reactive

Embora seja possível declarar objetos reativos usando `ref`, a função `reactive` é mais recomendada para esse tipo de situação. Nesse caso, para acessar o valor do atributo não é necessário usar a propriedade `value`. Veja o exemplo do objeto `pessoa` com uma função para alterar a idade:

```html
<script setup>
  import { reactive } from 'vue';

  const pessoa = reactive({
    nome: 'João',
    idade: 30,
    ativo: true,
  });

  function aniversario() {
    pessoa.idade++;
  }
</script>

<template>
  <div>
    <p>
      {% raw %}{{ pessoa.nome }}{% endraw %} tem {% raw %} {{ pessoa.idade }} {%
      endraw %} anos
    </p>
    <button @click="aniversario">Fazer aniversário</button>
  </div>
</template>
```

No exemplo acima, a variável `pessoa` é declarada usando a função `reactive`. A variável `pessoa` é um objeto que possui três propriedades: `nome`, `idade` e `ativo`. Quando o botão é clicado, a função `aniversario` é chamada e a propriedade `idade` do objeto `pessoa` é incrementada. Como o objeto `pessoa` é reativo, o valor da propriedade `idade` é atualizado automaticamente.

## Uso nas templates e outras considerações

Embora já tenhamos apresentado exemplos anteriormente, note que para acessar o valor de uma variável reativa, é necessário usar simplesmente a sintaxe `{% raw %}{{ variavel }}{% endraw %}`, como qualquer variável. Mesmo no caso das variáveis definidas usando `ref()`, não é necessário acessar a propriedade `value` para acessar o valor da variável reativa, na parte de template.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Início')</span> <span>[Propriedades Computadas &gt;](propriedades-computadas.html 'Próximo')</span></span>
