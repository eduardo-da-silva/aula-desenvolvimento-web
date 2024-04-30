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

<span style="display: flex; justify-content: space-between;"><span>[&lt; Criação](criacao.html 'Anterior')</span><span>[Propriedades de componentes &gt;](propriedades.html 'Próximo')</span></span>
