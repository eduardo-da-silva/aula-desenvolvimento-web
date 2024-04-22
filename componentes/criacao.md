---
title: 'Criação de componentes'
permalink: /componentes/criacao
---

# Criação de um componentes

É importante ressaltar que os componentes podem ser criados de formas simples, diretamente em um arquivo `.html` ou dentro de um outro componente `Vue`. Aqui, nesses exemplos, abordaremos os componentes Single-File (SFC - _Single-File Components_) do Vue, em que cada componente é descrito dentro de um arquivo `.vue` independente. Como já estudado em tópicos anteriores, este é um formato de arquivo especial que nos permite encapsular o _template_, lógica e estilização de um componente Vue em um único arquivo.

Aqui está um exemplo de um componente Vue, em um arquivo chamado `  ExpandBox.vue` armazenado no diretório `src/components`:

```html
<script>
  export default {
    data() {
      return {
        expanded: false,
      };
    },
    computed: {
      buttonText() {
        return this.expanded ? 'Esconder' : 'Mostrar';
      },
    },
  };
</script>
<template>
  <button @click="expanded=!expanded">{{buttonText}}</button>
  <div v-if="expanded" class="expand-box">Conteúdo</div>
</template>

<style scoped>
  .expand-box {
    height: 100%;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 2px gray;
  }
</style>
```

No exemplo acima, definimos um dado chamado `expanded` com o valor padrão `false`. Também foi definido um dado computado chamado `buttonText`, que e retorna a _string_ **Esconder** se o dado `expanded` seja `true` ou a _string_ **Mostrar** se o dado `expanded` for `false`.

Na árvore HTML, definida no bloco _template_, foi adicionado um botão que, ao ser clicado, inverte o valor do dado `expanded`. Também, o texto desse botão é definido como o dado computado `buttonText` (que depende do valor de `expanded`). Em seguida, foi definida uma `div` que apenas será exibida se o dado `expanded` for `true`.

Por fim, um bloco de estilos CSS (_style scoped_) foi definido para os elementos da classe `.expand-box` (Note que apenas a div tem essa classe).

# Registro global de componentes

Para que possam ser utilizados (e reutilizados) em outros lugares do código. Existem duas formas de registro: global e local. Se o registro for global, ele poderá ser acesso em todos os componentes diretamente, sem precisar de configurações adicionais. Para o registro global de um componente (considerando o componente `ExpandBox` criado anteriormente), basta adicionar o seguinte comando no arquivo `main.js`:

```js

```
