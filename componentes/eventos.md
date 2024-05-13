---
title: 'Eventos'
permalink: /componentes/eventos
---

# Eventos

A manipulação de eventos é uma parte importante da programação de interfaces de usuário. No Vue.js, os componentes filhos podem emitir eventos que são capturados pelos componentes pais. Para isso, é necessário utilizar a diretiva `v-on` no componente pai e o método `$emit` no componente filho.

Vamos fazer um exemplo de uma listagem de produtos que recebe como propriedade um array de produtos e emite um evento quando o usuário clica em um ícone de `lixeira` para excluir um produto.

## Iniciando o projeto

Crie um novo projeto Vue.js como já foi feito anteriormente. Em seguida, instale o pacote `@mdi/font` para utilizar os ícones do Material Design Icons. Para isso, execute o comando:

```bash
npm install @mdi/font
```

Agora, faça a limpeza do projeto, removendo os arquivos desnecessários, como já visto anteriormente. Em seguida, edite o arquivo `src/assets/main.css` e substitua o conteúdo pelo seguinte:

```css
@import '@mdi/font/css/materialdesignicons.css';
```

## Criando o componente `ProductList`

Crie um novo componente chamado `ProductList.vue` no diretório `src/components` com o seguinte conteúdo:

```html
<script setup>
  const props = defineProps(['produtos']);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="produto in props.produtos" :key="produto.id">
        <td>{{ produto.nome }}</td>
        <td>{{ produto.preco }}</td>
        <td>
          <i class="mdi mdi-delete" @click="$emit('remove', produto.id)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  table {
    width: 50%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid gray;
    padding: 10px;
  }

  th {
    background-color: lightgray;
  }

  tr {
    text-align: center;
  }

  tr i {
    cursor: pointer;
    font-size: larger;
  }
</style>
```

No código acima, o componente `ProductList` recebe um array de produtos como propriedade e exibe uma tabela com o nome e o preço de cada produto. Além disso, é exibido um ícone de `lixeira` em cada linha da tabela. Tudo isso já foi estudado anteriormente.

A novidade está no evento `remove` que é emitido quando o usuário clica no ícone de `lixeira`. O evento `remove` é emitido com o `id` do produto como argumento. Vamos explicar um pouco melhor a estrutura desse comando:

- `@click="$emit('remove', produto.id)"`: o evento `click` é capturado no ícone de `lixeira` e, quando isso acontece, o método `$emit` é chamado. O método `$emit` recebe dois argumentos: o nome do evento (`remove`) e o argumento do evento (`produto.id`).

Nesse caso, o componente `ProductList` envia ao componente pai o evento `remove` com o `id` do produto que deve ser removido.

## Criando o componente `App`

Edite o arquivo `src/App.vue` e substitua o conteúdo pelo seguinte:

```html
<script setup>
  import { ref } from 'vue';
  import ProductList from './components/ProductList.vue';

  const produtos = ref([
    { id: 1, nome: 'Produto 1', preco: 19.99 },
    { id: 2, nome: 'Produto 2', preco: 29.99 },
    { id: 3, nome: 'Produto 3', preco: 39.99 },
  ]);

  function removerItem(id) {
    const index = produtos.value.findIndex((produto) => produto.id === id);
    produtos.value.splice(index, 1);
  }
</script>

<template>
  <product-list :produtos="produtos" @remove="removerItem" />
</template>
```

Neste caso, o componente `App` importa o componente `ProductList` e exibe a lista de produtos. Veja que criamos um array de produtos chamado `produtos` e passamos esse array como propriedade para o componente `ProductList`. Tudo isso já foi estudado anteriormente.

A novidade está no evento `remove` que é capturado no componente `App`. Quando o evento `remove` é capturado, a função `removerItem` é chamada. A função `removerItem` recebe o `id` do produto que deve ser removido e utiliza o método `splice` para remover o produto da lista. Vamos explicar um pouco melhor a estrutura desse comando:

- `@remove="removerItem"`: o evento `remove` é capturado no componente `App` e, quando isso acontece, a função `removerItem` é chamada. A função `removerItem` recebe o `id` do produto que deve ser removido.
- esse `id` foi emitido pelo componente `ProductList` quando o usuário clicou no ícone de `lixeira`.

## Executando o projeto

Execute o projeto com o comando:

```bash
npm run dev
```

Acesse no navegador e veja a listagem de produtos. Clique no ícone de `lixeira` para remover um produto da lista.

# Conclusão

Neste capítulo, você aprendeu como manipular eventos em componentes Vue.js. A manipulação de eventos é uma parte importante da programação de interfaces de usuário. No Vue.js, os componentes filhos podem emitir eventos que são capturados pelos componentes pais. Para isso, é necessário utilizar a diretiva `v-on` no componente pai (abreviada com `@`) e o método `$emit` no componente filho.

Com esses conceitos, você pode criar interfaces de usuário interativas e dinâmicas com Vue.js.

<span style="display: flex; justify-content: space-between;"><span> [&lt; Slots - conteúdo (slots.html 'Anterior')</span><span>[Exercícios &gt;](exercícios.html 'Próximo')</span></span>
