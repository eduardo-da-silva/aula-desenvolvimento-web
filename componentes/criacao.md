---
title: 'Criação de componentes'
permalink: /componentes/criacao
---

# Criação de um componentes

É importante ressaltar que os componentes podem ser criados de formas simples, diretamente em um arquivo `.html` ou dentro de um outro componente `Vue`. Aqui, nesses exemplos, abordaremos os componentes Single-File (SFC - _Single-File Components_) do Vue, em que cada componente é descrito dentro de um arquivo `.vue` independente. Como já estudado em tópicos anteriores, este é um formato de arquivo especial que nos permite encapsular o _template_, lógica e estilização de um componente Vue em um único arquivo.

Neste exemplo, vamos criar um componente chamado `ExpandBox`, que exibe um botão que, ao ser clicado, exibe ou esconde um conteúdo adicional. Vamos construir esse componente em um arquivo `.vue` e armazená-lo no diretório `src/components`. Para isso, crie um arquivo chamado `ExpandBox.vue`, no diretório `src/components`, e adicione o seguinte código:

```html
<script setup>
  import { computed, ref } from 'vue';

  const showContent = ref(false);
  const buttonText = computed(() =>
    showContent.value ? 'Esconder' : 'Mostrar',
  );
</script>

<template>
  {% raw %}
  <button @click="showContent=!showContent">{{buttonText}}</button>
  <div v-if="showContent" class="expand-box">
    Conteúdo da caixa de expansão.
  </div>
  {% endraw %}
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

No exemplo acima, definimos uma variável reativa _booleana_ `showContent` com o valor padrão `false`. Também foi definida uma propriedade computada chamado `buttonText`, que e retorna a _string_ **Esconder** se o valor de `showContent` for `true` ou a _string_ **Mostrar** se o valor for `false`.

Na árvore HTML, definida no bloco _template_, foi adicionado um botão que, ao ser clicado, inverte o valor de `showContent`. Também, o texto desse botão é definido pela propriedade computada `buttonText` (que depende do valor de `showContent`). Em seguida, foi definida uma `div` que apenas será exibida se o dado `showContent` for `true`.

Por fim, um bloco de estilos CSS (_style scoped_) foi definido para os elementos da classe `.expand-box` (Note que apenas a div tem essa classe).

# Registro e uso do componente

Para utilizar o componente `ExpandBox` em um arquivo `.vue` ou em outro componente, basta importá-lo e usá-lo. Para isso, adicione o seguinte código no arquivo `src/App.vue`:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';
</script>

<template>
  <div>
    <expand-box />
  </div>
</template>
```

No exemplo acima, o componente `ExpandBox` foi importado e, em seguida, foi utilizado no bloco _template_ do componente `App`. Ao executar a aplicação, o componente `ExpandBox` será exibido na tela.

Também, é possível utilizar esse componente diversas vezes e também em outros componentes. Para isso, basta importá-lo e utilizá-lo conforme necessário. Vamos considerar que se deseja apresentar três caixas de expansão na tela. Para isso, basta adicionar o seguinte código no bloco _template_ do componente `App`:

```html
<template>
  <div>
    <expand-box />
    <expand-box />
    <expand-box />
  </div>
</template>
```

Nesse caso, o componente `ExpandBox` será exibido três vezes na tela, sendo que o comportamento de cada um é independente dos demais.

# Registro global de componentes

Note que nos exemplos que vimos, o componente `ExpandBox` precisou ser importado para ser utilizado no componente `App`. Se eu quisesse utilizar o componente `ExpandBox` em outro componente, também seria necessário importá-lo. Isso pode ser um pouco trabalhoso, principalmente se o componente for utilizado em muitos lugares.

Para que um componente possa ser utilizado em qualquer parte da aplicação, sem precisar importá-lo em cada componente, é possivel registrá-lo globalmente. Para isso, basta adicionar o seguinte código no arquivo `src/main.js`:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import ExpandBox from './components/ExpandBox.vue';

const app = createApp(App);
app.component('expand-box', ExpandBox);
app.mount('#app');
```

Note que o método `app.component` foi utilizado para registrar o componente `ExpandBox` globalmente. Agora, o componente `ExpandBox` pode ser utilizado em qualquer parte da aplicação, sem precisar importá-lo.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Anterior')</span> <span>[Propriedades de componentes &gt;](propriedades.html 'Próximo')</span></span>
