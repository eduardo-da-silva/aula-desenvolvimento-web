---
title: 'Correção dos Exercícios'
permalink: /intro/correcao-exercicios
---

# Correção usando a API de opções

Faremos a correção dos exercícios usando a API de opções. Também, vamos corrigir os dois exercícios num só exemplo.

```html
<script>
  export default {
    data() {
      return {
        contador: 0,
      };
    },
    methods: {
      incrementar() {
        this.contador++;
      },
      decrementar() {
        if (this.contador > 0) {
          this.contador--;
        }
      },
      reiniciar() {
        this.contador = 0;
      },
    },
  };
</script>

<template>
  <div>
    <h1>Contador</h1>
    <p>{% raw %} {{ contador }} {% endraw %}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="reiniciar">Reiniciar</button>
  </div>
</template>
```

# Correção usando a API de composição

Agora, vamos corrigir os exercícios usando a API de composição.

```html
<script setup>
  import { ref } from 'vue';

  const contador = ref(0);

  function incrementar() {
    contador.value++;
  }

  function decrementar() {
    if (contador.value > 0) {
      contador.value--;
    }
  }

  function reiniciar() {
    contador.value = 0;
  }
</script>

<template>
  <div>
    <h1>Contador</h1>
    <p>{% raw %} {{ contador }} {% endraw %}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="reiniciar">Reiniciar</button>
  </div>
</template>
```

<span style="display: flex; justify-content: space-between;"

> <span>[&lt; Exercícios](exercicios.html 'Voltar')</span>
> <span>[Sumário &gt;](../ 'Próximo')</span></span

```

```
