---
title: 'Correção dos Exercícios'
permalink: /reatividade/correcao-exercicios
---

# Correção dos exercícios

Para fixar o conteúdo apresentado, resolva os exercícios abaixo:

1. Faça dois contadores (com botões de incrementar e decrementar). Mostre uma `div` com a soma dos dois valores. Também, usando propriedades computadas, faça uma `div` aparecer quando o valor da soma for maior que 10 e outra quando for menor que 10.
2. Seguindo o mesmo exemplo anterior, faça uma `div` que seja apresentada se o resultado da soma for par e outra se a soma for ímpar. Também usando propriedades computadas.
3. Faça uma variável reativa para guardar um valor booleano. Mostre uma `div` com o texto "Verdadeiro" quando o valor for verdadeiro e "Falso" quando o valor for falso.

Faremos a correção dos exercícios usando a API de composição. Vamos, além disso, corrigir todos os itens num só exemplo.

```html
<script setup>
  import { computed, ref } from 'vue';

  const contador1 = ref(0);
  const contador2 = ref(0);
  const valorBooleano = ref(true);

  function incrementar(contador) {
    contador.value++;
  }

  function decrementar(contador) {
    if (contador.value > 0) {
      contador.value--;
    }
  }

  const soma = computed(() => contador1.value + contador2.value);
  const somaPar = computed(() => soma.value % 2 === 0);
  const somaMaiorQue10 = computed(() => soma.value > 10);
</script>

<template>
  <div>
    <h1>Correção dos exercícios</h1>
    <div class="contador">
      <h2>Contador 1</h2>
      <button @click="incrementar(contador1)">Incrementar</button>
      <button @click="decrementar(contador1)">Decrementar</button>
      <p>Valor: {% raw %}{{ contador1 }}{% endraw %}</p>
    </div>
    <div class="contador">
      <h2>Contador 2</h2>
      <button @click="incrementar(contador2)">Incrementar</button>
      <button @click="decrementar(contador2)">Decrementar</button>
      <p>Valor: {% raw %}{{ contador2 }}{% endraw %}</p>
    </div>
    <div class="soma">
      <h2>Soma</h2>
      <p>Valor: {{ soma }}</p>
      <div v-if="somaMaiorQue10">
        <p>A soma é maior que 10</p>
      </div>
      <div v-else>
        <p>A soma é menor que 10</p>
      </div>
      <div v-if="somaPar">
        <p>A soma é par</p>
      </div>
      <div v-else>
        <p>A soma é ímpar</p>
      </div>
    </div>
    <div class="booleano">
      <h2>Valor booleano</h2>
      <button @click="valorBooleano = !valorBooleano">Alterar valor</button>
      <div v-if="valorBooleano">
        <p>Verdadeiro</p>
      </div>
      <div v-else>
        <p>Falso</p>
      </div>
    </div>
  </div>
</template>
```

Note que esta é uma das formas de corrigir os exercícios. Existem outras formas de fazer a mesma coisa. O importante é entender o conceito e a sintaxe de templates do Vue 3.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Exercícios](exercicios.html 'Voltar')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span>
