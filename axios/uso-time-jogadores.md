---
title: "Uso no projeto Time-Jogadores"
permalink: /axios/uso-time-jogadores
---

# Implementação no projeto Times-Jogadores

Inicialmente, criaremos uma classe para manipular os acessos ao servidor REST. Isso facilitará futuras alterações e manutenções no código, além de centralizar todas os acessos em um único local.

Assim, crie um arquivo `src/api/times.js` na pasta do projeto, como segue:

```javascript
import axios from 'axios';
export default class TimesApi {
  async buscarTodosOsTimes() {
    const response = await axios.get('http://localhost:4000/times');
    return response.data;
  }

  async buscarTime(id) {
    const response = await axios.get(`http://localhost:4000/times/${id}`);
    return response.data;
  }

  async adicionarTime(time) {
    const response = await axios.post('http://localhost:4000/times', time);
    return response.data;
  }

  async excluirTime(id) {
    const response = await axios.delete(`http://localhost:4000/times/${id}`);
    return response.data;
  }

  async atualizarTime(time) {
    const response = await axios.put(
      `http://localhost:4000/times/${time.id}`,
      time,
    );
    return response.data;
  }
}
```

Note que, neste exemplo, criamos uma classe chamada `TimesApi` que contém diversos métodos: `buscarTodosOsTimes`, `buscarTime`, `adicionarTime`, `excluirTime` e `atualizarTime`. Cada um desses métodos realiza uma operação de acesso ao servidor, como visto na seção anterior.

# Implementação completa do componente _Times_

Em seguida, podemos fazer o acesso a essa classe no código em **vue** de manipulação dos times, como no exemplo a seguir:

```javascript
<script>
import TimesApi from "@/api/times.js";
const timesApi = new TimesApi();
export default {
  data() {
    return {
      time: {},
      times: [],
    };
  },
  async created() {
    this.times = await timesApi.buscarTodosOsTimes();
  },
  methods: {
    async salvar() {
      if (this.time.id) {
        await timesApi.atualizarTime(this.time);
      } else {
        await timesApi.adicionarTime(this.time);
      }
      this.times = await timesApi.buscarTodosOsTimes();
      this.time = {};
    },
    async excluir(time) {
      await timesApi.excluirTime(time.id);
      this.times = await timesApi.buscarTodosOsTimes();
    },
    editar(time) {
      Object.assign(this.time, time);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="time.nome" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{% raw %}{{ time.id }}{% endraw %}</td>
            <td>{% raw %}{{ time.nome }}{% endraw %}</td>
            <td>
              <button @click="editar(time)">Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
```

[&lt; Exemplo de uso](exemplo-de-uso.html "Anterior") 
<span style="display: inline-block;width: 60%"></span>
