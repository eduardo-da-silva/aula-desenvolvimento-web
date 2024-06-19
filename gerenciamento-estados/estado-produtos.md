---
title: 'Configurando o estado global de produtos'
permalink: /gerenciamento-estados/estado-produtos
---

# Criando um estado para produtos

Para criar um estado global que armazena as informações sobre os produtos, vamos criar um arquivo `src/stores/products.js` e definir um _store_ global com o Pinia. O conteúdo do arquivo `products.js` deve ser semelhante a este:

```js
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, nome: 'Produto 1', price: 19.99 },
    { id: 2, nome: 'Produto 2', price: 29.99 },
    { id: 3, nome: 'Produto 3', price: 39.99 },
  ]);

  function removeProduct(id) {
    const index = products.value.findIndex((product) => product.id === id);
    products.value.splice(index, 1);
  }
  return { products, removeProduct };
});
```

Neste arquivo, importamos as funções `ref` e `defineStore` do Vue e do Pinia, respectivamente. Em seguida, criamos um _store_ global chamado `products` com o Pinia, que armazena um array de produtos. O _store_ global também define um método `removeProduct` que remove um produto da lista com base no `id` do produto.

Note que retornamos um objeto com as propriedades `products` e `removeProduct` do _store_ global. Essas propriedades podem ser acessadas e modificadas a partir dos componentes da aplicação.

Aqui, eu optei por usar todos os nomes de variáveis em inglês, mas você pode usar o idioma que preferir. Na versão anterior, eu usei o idioma português para facilitar o entendimento. Agora, faremos os ajustes necessários.

Na próxima etapa vamos alterar o componente `ProductView` para utilizar o _store_ global de produtos e exibir a lista de produtos a partir do _store_.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Configurando o Pinia](configurando-pinia.html 'Anterior')</span> <span>[Ajustes no componente de visualização de produtos &gt;](ajustes-componentes.html 'Próximo')</span></span>
