---
title: 'Correção dos Exercícios'
permalink: /listas/correcao-exercicios
---

# Correção dos exercícios

Para fixar o conteúdo apresentado, resolva os exercícios abaixo:

1. Faça uma tela que renderize uma lista de cidades. O componente deve receber um array de cidades como propriedade. A lista deve ser renderizada em um elemento `ul`. Cada item da lista deve ser renderizado em um elemento `li`. As cidades iniciais devem ser:

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
  'Brasília',
];
```

2. Usando o mesmo Array do exercício anterior, deve ser renderizada uma lista deve ser renderizada em ordem alfabética. A lista deve ser renderizada em um elemento `ul`. Cada item da lista deve ser renderizado em um elemento `li`. _Dica_: para ordenar um array, você pode usar o método `sort` do array, preferencialmente em uma propriedade computada.

Faremos a correção dos exercícios usando a API de composição. Vamos, além disso, corrigir todos os itens num só exemplo.

```html
<script setup>
  import { computed, ref } from 'vue';

  const cidade = ref('');
  const cidades = ref([
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Salvador',
    'Fortaleza',
    'Curitiba',
    'Manaus',
    'Recife',
    'Porto Alegre',
    'Brasília',
  ]);

  const cidadesOrdenadas = computed(() => [...cidades.value].sort());

  function adicionarCidade() {
    cidades.value.push(cidade.value);
    cidade.value = '';
  }

  function removerCidade(index) {
    cidades.value.splice(index, 1);
  }
</script>

<template>
  <div class="correcao">
    <h1>Correção dos exercícios</h1>
    <div class="form">
      <h2>Formulário de cidades</h2>
      <input type="text" v-model="cidade" />
      <button @click="adicionarCidade">Adicionar</button>
    </div>
    <div class="resultados">
      <div class="cidades">
        <h2>Lista de cidades</h2>
        <ul>
          <li v-for="(cidade, index) in cidades" :key="index">
            {% raw %} {{ cidade }} {% endraw %}
            <button @click="removerCidade(index)">Remover</button>
          </li>
        </ul>
      </div>
      <div class="cidades">
        <h2>Cidades ordenadas</h2>
        <ul>
          <li v-for="cidade in cidadesOrdenadas" :key="cidade">
            {% raw %} {{ cidade }} {% endraw %}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .correcao {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    margin: 20px auto;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 70%;
  }

  .form input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 50%;
  }

  .resultados {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .cidades {
    margin-bottom: 20px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cidades ul {
    list-style: none;
    padding: 0;
    width: 80%;
  }

  .cidades li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cidades button {
    margin-left: 10px;
  }
</style>
```

Note que esta é uma das formas de corrigir os exercícios. Existem outras
formas de fazer a mesma coisa. O importante é entender os conceitos e como
utilizá-los.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Exercícios](exercicios.html 'Voltar')</span><span>[Sumário &gt;](../ 'Próximo')</span></span>
