---
title: 'Navegação programática'
description: Navegação programática entre rotas
permalink: /roteamento/navegacao-programatica
---

# Quando usar a navegação programática

Até então, vimos como navegar entre as rotas utilizando o componente `router-link`. No entanto, em alguns casos, pode ser necessário realizar a navegação de forma programática, ou seja, sem a interação direta do usuário. Isso pode ser útil em situações como:

- Redirecionamento após uma ação do usuário (por exemplo, após o envio de um formulário).
- Navegação com base em uma lógica de negócio (por exemplo, após a autenticação do usuário).
- Navegação com base em eventos externos (por exemplo, após a conclusão de uma requisição assíncrona).

Vamos ver como realizar a navegação programática entre rotas no Vue Router.

# Criando um botão de navegação programática

Vamos editar o componente de detalhes do produto para adicionar um botão que permita a navegação programática para a página de listagem de produtos. Edite o arquivo `src/views/ProductDetailsView.vue` e altere o conteúdo para o seguinte:

```html
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps(['id']);
  const router = useRouter();
  const produtos = ref([
    { id: 1, nome: 'Produto 1', preco: 19.99 },
    { id: 2, nome: 'Produto 2', preco: 29.99 },
    { id: 3, nome: 'Produto 3', preco: 39.99 },
  ]);

  const produto = ref(null);

  onMounted(() => {
    produto.value = produtos.value.find((produto) => produto.id == props.id);
  });

  function navigateToProducts() {
    router.push({ name: 'products' });
  }
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
  <button @click="navigateToProducts">Voltar para a lista de produtos</button>
  {% endraw %}
</template>
```

No código acima, adicionamos um botão que, ao ser clicado, chama a função `navigateToProducts`. Essa função utiliza o método `router.push` para navegar para a rota com o nome `products`. O método `router.push` recebe um objeto de opções que pode conter o nome da rota, o caminho da rota ou o objeto de rota.

Note algumas novidades nesse código:

- Importamos a função `useRouter` do Vue Router para obter a instância do roteador. Essa função é utilizada para acessar o roteador dentro de um componente.
- Instanciamos o roteador com `const router = useRouter()`. Essa instância do roteador é utilizada para realizar a navegação programática.
- Criamos a função `navigateToProducts` que chama o método `router.push` para navegar para a rota com o nome `products`.

Veja que navegamos pelo nome da rota, que é definido no arquivo `src/router/index.js`. O nome da rota é uma forma mais segura de navegar entre rotas, pois evita a dependência direta do caminho da rota.

## Passando parâmetros na navegação programática

No exemplo acima, realizamos a navegação programática para a rota de listagem de produtos sem passar nenhum parâmetro. No entanto, é possível passar parâmetros na navegação programática, assim como fazemos com o componente `router-link`.

Vamos supor que eu desejasse chamar a rota de detalhes do produto ao invés da rota de listagem de produtos. Para isso, precisaríamos passar o ID do produto como parâmetro na navegação programática. Para isso, basta passar um objeto com a propriedade `params` contendo os parâmetros desejados. Veja o exemplo abaixo:

```javascript
router.push({ name: 'product-details', params: { id: 1 } });
```

Nesse caso, estamos navegando para a rota de detalhes do produto com o ID 1. O Vue Router irá substituir o parâmetro `:id` na rota pela string `1`. Não faremos essa alteração no exemplo, mas você pode testar essa funcionalidade em seu projeto.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Rotas dinâmicas (Listagem de produtos) ](rotas-dinamicas.html 'Anterior')</span> <span>[Exercícios &gt;](exercicios.html 'Próximo')</span></span>
