---
title: 'Ajustes no componente de visualização de produtos'
permalink: /gerenciamento-estados/ajustes-componentes
---

# Usando o estado global de produtos

Agora que temos um _store_ global para armazenar as informações sobre os produtos, vamos ajustar o componente `ProductView` para utilizar esse _store_ e exibir a lista de produtos a partir dele.

Vamos editar o arquivo `src/components/ProductView.vue` e fazer os ajustes necessários para utilizar o _store_ global de produtos. Primeiramente, vamos alterar o bloco `<script setup>` para importar o _store_ global de produtos e acessar a lista de produtos a partir dele:

```html
<script setup>
  import ProductList from '../components/ProductList.vue';
  import { useProductsStore } from '../stores/products';
  const productStore = useProductsStore();
</script>
```

Note que não estamos mais criando uma variável local `produtos` para armazenar a lista de produtos, mas sim importando apenas o _store_ global `productStore`. Da mesma forma, não definimos a função para remover um produto, pois essa lógica agora está contida no _store_ global.

De forma um pouco mais detalhada, estamos importando o object `useProductsStore` do arquivo `products.js` e criando uma variável `productStore` que contém o _store_ global de produtos. Com isso, podemos acessar a lista de produtos a partir do _store_ global.

Agora, vamos ajustar o bloco `<template>` para utilizar o componente `ProductList` e passar a lista de produtos como propriedade:

```html
<template>
  <product-list
    :produtos="productStore.products"
    @remove="productStore.removeProduct"
  />
</template>
```

Note que as alterações foram simples: substituímos a variável `produtos` pela propriedade `productStore.products` e o método `removeProduct` pelo método `productStore.removeProduct`. Com isso, o componente `ProductView` está utilizando o _store_ global de produtos para exibir a lista de produtos e remover um produto.

Com isso, o componente `ProductView` está utilizando o _store_ global de produtos para exibir a lista de produtos e remover um produto.

# Conclusão

O uso do _store_ global de produtos permite que os componentes da aplicação compartilhem o mesmo estado, garantindo que as informações exibidas na tela estejam sempre atualizadas. Além disso, o _store_ global facilita a manipulação do estado da aplicação, tornando o código mais organizado e fácil de manter.

As alterações no código são mínimas, mas o impacto na organização e manutenção do código é significativo. Com o _store_ global de produtos, podemos criar aplicações mais robustas e escaláveis, facilitando o desenvolvimento e a manutenção do código.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Estado dos produtos](estado-produtos.html 'Anterior')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span>
