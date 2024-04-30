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

## Tipos permitidos para propriedades

Além de definir propriedades como obrigatórias e com valores padrão, é possível definir os tipos permitidos para as propriedades. Para isso, basta passar o tipo desejado para a propriedade `type` no objeto que define a propriedade.

Os tipos permitidos para as propriedades são:

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`
- `Error`

Por exemplo, podemos definir uma nova propriedade `qtde` no componente `ExpandBox` e definir o tipo da propriedade como `Number`. Para isso, substitua o código no arquivo `src/components/ExpandBox.vue`, como segue:

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
    qtde: {
      type: Number,
      default: 1,
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
      <p>Quantidade: {{ props.qtde }}</p>
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

No código acima, a propriedade `qtde` foi definida com o tipo `Number`. Isso significa que, ao instanciar o componente `ExpandBox`, é necessário passar um valor numérico para a propriedade `qtde`. Se um valor não numérico for passado para a propriedade `qtde`, um erro será gerado.

Também podem ser definidos outros tipos, como especificado, e que respeitam as regras de tipagem e manipulação do JavaScript.

# Envio de valores para propriedades de forma dinâmica

Para enviar valores para propriedades de forma dinâmica, basta utilizar a interpolação de variáveis no template do componente. Por exemplo, podemos definir duas variáveis, `title` e `qtde` no componente `App` e enviar o valor dessas variáveis para as propriedades `title` e `qtde` do componente `ExpandBox`. Para isso, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';

  const title = 'Título da caixa de expansão';
  const qtde = 2;
</script>

<template>
  <div>
    <expand-box :title="title" :qtde="qtde" />
  </div>
</template>
```

Note que não é necessário utilizar a diretiva `v-bind` para enviar valores para propriedades de forma dinâmica, pois o Vue.js faz isso automaticamente, quando utilizada a abreviação `:`.

# Enviando objetos para propriedades

Para enviar objetos para propriedades, basta utilizar a interpolação de objetos no template do componente. Por exemplo, podemos definir um objeto `obj` no componente `App` e enviar o valor desse objeto para a propriedade `obj` do componente `ExpandBox`. Para isso, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import ExpandBox from './components/ExpandBox.vue';

  const obj = {
    title: 'Título da caixa de expansão',
    qtde: 2,
  };
</script>

<template>
  <div>
    <expand-box v-bind="obj" />
  </div>
</template>
```

No código acima, o objeto `obj` é enviado para o componente `ExpandBox` utilizando a interpolação de objetos. Isso significa que o objeto `obj` é desestruturado e os valores de suas propriedades são enviados para as propriedades correspondentes do componente `ExpandBox`. Nesse caso, o resultado é o mesmo que enviar os valores diretamente para as propriedades do componente `ExpandBox`, como:

```html
<expand-box :title="obj.title" :qtde="obj.qtde" />
```

# Conclusão

Vimos mais algumas formas de definir propriedades em componentes Vue.js. A definição de propriedades com valores padrão e tipos específicos é útil para garantir que os componentes sejam utilizados corretamente e para evitar erros de tipagem. Além disso, vimos como enviar valores para propriedades de forma dinâmica e como enviar objetos para propriedades. Essas técnicas são úteis para reutilizar componentes e para tornar o código mais limpo e organizado.

Nas próximas aulas, vamos ver como criar componentes com conteúdo e como utilizar slots para passar conteúdo para componentes filhos.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Propriedades de componentes](propriedades.html 'Anterior')</span><span>[Slots &gt;](slots.html 'Próximo')</span></span>
