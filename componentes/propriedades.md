---
title: 'Propriedades de componentes'
permalink: /componentes/propriedades
---

# Propriedades de um componentes

Ao criar um componente, é possível passar propriedades para ele. As propriedades são valores que podem ser utilizados pelo componente para alterar seu comportamento ou sua aparência. As propriedades são passadas para o componente como atributos HTML e são acessadas pelo componente como variáveis JavaScript.

Voltando ao exemplo do componente `ExpandBox`, vamos adicionar uma propriedade chamada `title` que será exibida no conteúdo da caixa de expansão. Para isso, substitua o código no arquivo `src/components/ExpandBox.vue`, como segue:

```html
<script setup>
  import { computed, ref, defineProps } from 'vue';

  const props = defineProps(['title']);

  const showContent = ref(false);
  const buttonText = computed(() =>
    showContent.value ? 'Esconder' : 'Mostrar',
  );
</script>

<template>
  <div>
    {% raw %}
    <button @click="showContent=!showContent">{{buttonText}}</button>
    <div v-if="showContent" class="expand-box">
      <h1>{{ props.title }}</h1>
      <p>Conteúdo da caixa de expansão.</p>
    </div>
    {% endraw %}
  </div>
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

No código acima, a propriedade `props.title` foi adicionada ao componente `ExpandBox`. A propriedade `props.title` é definida no bloco `<script setup>` usando o método `defineProps`. O método `defineProps` recebe um array de strings com os nomes das propriedades que o componente deve receber. No bloco `<template>`, a propriedade `props.title` é exibida no conteúdo da caixa de expansão.

## Passando propriedades para um componente

Para passar propriedades para um componente, basta adicionar atributos HTML ao componente. No exemplo acima, a propriedade `title` foi adicionada ao componente `ExpandBox` no arquivo `src/App.vue`. Para isso, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';
</script>

<template>
  <div>
    <expand-box title="Título da caixa de expansão" />
  </div>
</template>
```

Ainda, como é possível instanciar o componente `ExpandBox` diversas vezes, é possível passar valores diferentes para a propriedade `title` em cada instância do componente. Para isso, basta adicionar o atributo `title` com o valor desejado ao componente `ExpandBox`. Veja o exemplo abaixo:

```html
<template>
  <div>
    <expand-box title="Título da caixa de expansão 1" />
    <expand-box title="Título da caixa de expansão 2" />
    <expand-box title="Título da caixa de expansão 3" />
  </div>
</template>
```

Com isso, cada instância do componente `ExpandBox` exibirá um título diferente na caixa de expansão.

# Passando várias propriedades para um componente

É possível passar várias propriedades para um componente. Para isso, basta adicionar mais atributos HTML ao componente. No exemplo abaixo, vamos adicionar uma propriedade `content` ao componente `ExpandBox` que será exibida no conteúdo da caixa de expansão. Para isso, substitua o código no arquivo `src/components/ExpandBox.vue`, como segue:

```html
<script setup>
  import { computed, ref, defineProps } from 'vue';

  const props = defineProps(['title', 'content']);

  const showContent = ref(false);
  const buttonText = computed(() =>
    showContent.value ? 'Esconder' : 'Mostrar',
  );
</script>

<template>
  <div>
    {% raw %}
    <button @click="showContent=!showContent">{{buttonText}}</button>
    <div v-if="showContent" class="expand-box">
      <h1>{{ props.title }}</h1>
      <p>{{ props.content }}</p>
    </div>
    {% endraw %}
  </div>
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

Para enviar as propriedades `title` e `content` para o componente `ExpandBox`, basta adicionar os atributos `title` e `content` ao componente. No exemplo abaixo, vamos adicionar as propriedades `title` e `content` ao componente `ExpandBox` no arquivo `src/App.vue`. Para isso, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';
</script>

<template>
  <div>
    <expand-box
      title="Título da caixa de expansão"
      content="Conteúdo da caixa de expansão"
    />
  </div>
</template>
```

# Conclusão

Vimos a parte inicial de como passar propriedades para um componente. Na próxima aula, vamos ver como passar propriedades com valores padrão e como passar propriedades com tipos específicos.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Propriedades de componentes](propriedades.html 'Anterior')</span><span>[Propriedades de componentes - outros recursos &gt;](propriedades-outros-recursos.html 'Próximo')</span></span>
