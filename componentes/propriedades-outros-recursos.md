---
title: 'Propriedades de componentes - Recursos adicionais'
permalink: /componentes/propriedades-outros-recursos
---

# Definindo outros recursos de propriedades

Até o momento, vimos como passar propriedades para um componente. Nesta aula, vamos ver como passar propriedades com valores padrão e como passar propriedades com tipos específicos.

Voltando ao exemplo do componente `ExpandBox`, vamos definir a propriedade `title` como obrigatória e um valor padrão para a propriedade `content`. Nos dois casos, vamos definir o tipo como `String`. Para isso, substitua o código no arquivo `src/components/ExpandBox.vue`, como segue:

```html
<script setup>
  import { computed, ref, defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: 'Conteúdo da caixa de expansão',
    },
  });

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

No código acima, a propriedade `title` foi definida como obrigatória e a propriedade `content` foi definida com um valor padrão. Para definir a propriedade `title` como obrigatória, basta adicionar a propriedade `required: true` ao objeto que define a propriedade `title`. Para definir um valor padrão para a propriedade `content`, basta adicionar a propriedade `default` ao objeto que define a propriedade `content`.

No caso do exemplo acima, a propriedade `title` é obrigatória e a propriedade `content` tem um valor padrão. Isso significa que, ao instanciar o componente `ExpandBox`, é necessário passar um valor para a propriedade `title`, mas não é necessário passar um valor para a propriedade `content`. Se um valor não for passado para a propriedade `content`, o valor padrão será utilizado.

Para utilizar o componente `ExpandBox` com as propriedades definidas, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';
</script>

<template>
  <div>
    <expand-box title="Título da caixa de expansão 1" />
    <expand-box
      title="Título da caixa de expansão 2"
      content="Conteúdo da caixa de expansão"
    />
  </div>
</template>
```

No código acima, duas instâncias do componente `ExpandBox` são criadas. A primeira instância não passa um valor para a propriedade `content`, enquanto a segunda instância passa um valor para a propriedade `content`.

# Conclusão

Vimos a parte inicial de como passar propriedades para um componente. Na próxima aula, vamos ver como passar propriedades com valores padrão e como passar propriedades com tipos específicos.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Propriedades de componentes](propriedades.html 'Anterior')</span><span>[Propriedades de componentes - outros recursos &gt;](propriedades-outros-recursos.html 'Próximo')</span></span>
