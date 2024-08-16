---
title: 'Rotas dinâmicas'
description: Listagem de produtos com rotas dinâmicas
permalink: /roteamento/rotas-dinamicas
---

# Resolução do exercício 2

Para resolver o exercício 2, vamos criar um componente chamado `ProductList` que exibe uma lista de produtos. Cada produto deve conter um `id`, `nome` e `preco`. O componente `ProductList` deve exibir a listagem dos produtos e permitir a remoção de um produto. Para isso, vamos criar o componente `src/component/ProductList.vue` com o seguinte conteúdo:

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
        {% raw %}
        <td>{{ produto.nome }}</td>
        <td>{{ produto.preco }}</td>
        <td>
          <i class="mdi mdi-delete" @click="$emit('remove', produto.id)" />
        </td>
        {% endraw %}
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

Agora, vamos editar o componente `ProductsView` para exibir a lista de produtos. Edite o arquivo `src/views/ProductsView.vue` e substitua o conteúdo pelo seguinte:

```html
<script setup>
  import { ref } from 'vue';
  import ProductList from '../components/ProductList.vue';

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

Note que esses códigos são os mesmos do conteúdo visto nas aulas de `components`. O componente `ProductList` exibe uma tabela com os produtos, e o componente `ProductsView` exibe o componente `ProductList` passando a lista de produtos e o método `removerItem` para remover um produto da lista. A principal diferença é que agora estamos fazendo a listagem a partir de um componente de rota e não mais diretamente no `App.vue`.

Com essas alterações, a listagem de produtos deve funcionar corretamente na página de produtos.

# Criando uma página para mostrar os detalhes de um produto (Rotas dinâmicas)

Para criar uma página que exibe os detalhes de um produto, vamos criar um novo componente chamado `ProductDetailsView`. Esse componente deve receber um `id` de produto como parâmetro e exibir os detalhes desse produto. Vamos criar o componente `src/views/ProductDetailsView.vue` com o seguinte conteúdo:

```html
<script setup>
  import { ref, onMounted } from 'vue';
  const props = defineProps({
    id: String,
  });

  const produtos = ref([
    { id: 1, nome: 'Produto 1', preco: 19.99 },
    { id: 2, nome: 'Produto 2', preco: 29.99 },
    { id: 3, nome: 'Produto 3', preco: 39.99 },
  ]);

  const produto = ref(null);

  onMounted(() => {
    produto.value = produtos.value.find((produto) => produto.id == props.id);
  });
</script>

<template>
  {% raw %}
  <div v-if="produto">
    <h1>{{ produto.nome }}</h1>
    <p>Preço: R$ {{ produto.preco }}</p>
  </div>
  <div v-else>
    <p>Produto não encontrado</p>
  </div>
  {% endraw %}
</template>
```

Veja que o componente `ProductDetailsView` recebe um `id` de produto como propriedade e exibe os detalhes desse produto. O componente `ProductDetailsView` busca o produto com o `id` informado na lista de produtos e exibe o nome e o preço do produto. Caso o produto não seja encontrado, é exibida a mensagem "Produto não encontrado".

Vamos agora configurar a rota para a página de detalhes do produto. Edite o arquivo `src/router/index.js` e adicione a seguinte rota:

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ProductsView from '../views/ProductsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: () => import('../views/ProductDetailsView.vue'),
      props: true,
    },
  ],
});

export default router;
```

No exemplo acima, adicionamos uma nova rota para a página de detalhes do produto. A rota `/products/:id` recebe um parâmetro `id` que será passado para o componente `ProductDetailsView` como propriedade. Dessa forma, ao acessar a URL `/products/1`, o componente `ProductDetailsView` exibirá os detalhes do produto com o `id` 1.

Veja que o Array de produtos está sendo importado diretamente no componente. Além disso, essas informações são repetidas em vários componentes, o que não é uma boa prática. Em um cenário real, esses dados seriam centralizados em um serviço ou store para serem compartilhados entre os componentes.

# Alterando a listagem de produtos para exibir os detalhes

Para alterar a listagem de produtos para exibir os detalhes de um produto, vamos adicionar um link para a página de detalhes do produto. Edite o componente `ProductList` e adicione um link para a página de detalhes do produto. O componente `ProductList` deve ficar da seguinte forma:

```html
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
        {% raw %}
        <td>{{ produto.nome }}</td>
        <td>{{ produto.preco }}</td>
        <td>
          <router-link
            :to="{ name: 'productDetails', params: { id: produto.id } }"
          >
            <i class="mdi mdi-eye" />
          </router-link>
          <i class="mdi mdi-delete" @click="$emit('remove', produto.id)" />
        </td>
        {% endraw %}
      </tr>
    </tbody>
  </table>
</template>
```

<span style="display: flex; justify-content: space-between;"><span>[&lt; Exercícios de fixação](exercícios-rotas-componentes.html 'Anterior')</span> <span>[Navegação Programática &gt;](navegacao-programatica.html 'Próximo')</span></span>
