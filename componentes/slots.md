---
title: 'Slots'
permalink: /componentes/slots
---

# Slots - Conteúdo

Até o momento, vimos como passar propriedades para um componente. Nesta aula, vamos ver como passar conteúdo para um componente. Para isso, vamos utilizar slots. Vamos começar com um exemplo simples.

Vamos criar um componente chamado `Card` que recebe um título e um conteúdo. O conteúdo será passado por meio de um slot. Para isso, crie um novo arquivo chamado `Card.vue` no diretório `src/components` e adicione o seguinte código:

```html
<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  {% raw %}
  <div class="card">
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </div>
  {% endraw %}
</template>

<style scoped>
  .card {
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 2px gray;
  }
</style>
```

Com o código acima, criamos um componente chamado `Card` que recebe um título por meio da propriedade `title` e um conteúdo por meio de um slot. O slot é definido pela tag `<slot></slot>`. O conteúdo passado para o slot será renderizado no local onde a tag `<slot></slot>` foi definida. Para utilizar o componente `Card`, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import Card from './components/Card.vue';
</script>

<template>
  <div>
    <Card title="Título do card">
      <p>Conteúdo do card</p>
    </Card>
  </div>
</template>
```

No código acima, o conteúdo `<p>Conteúdo do card</p>` é passado para o slot do componente `Card`. O conteúdo passado para o slot será renderizado no local onde a tag `<slot></slot>` foi definida no componente `Card`.

## Slot com conteúdo padrão (fallback)

É possível definir um conteúdo padrão para o slot. Para isso, basta adicionar um conteúdo padrão entre as tags `<slot></slot>`. O conteúdo padrão será renderizado caso nenhum conteúdo seja passado para o slot. Vamos ver um exemplo. Vamos adicionar um conteúdo padrão para o slot do componente `Card`. Para isso, substitua o código no arquivo `src/components/Card.vue`, no bloco _template_, como segue:

```html
<script setup>
  import Card from './components/Card.vue';
</script>

<template>
  {% raw %}
  <div class="card">
    <h1>{{ props.title }}</h1>
    <slot>
      <p>Conteúdo padrão do card</p>
    </slot>
  </div>
  {% endraw %}
</template>
```

Com o código acima, definimos um conteúdo padrão para o slot do componente `Card`. Caso nenhum conteúdo seja passado para o slot, o conteúdo padrão será renderizado.

## Slots nomeados

É possível definir vários slots em um componente. Para isso, basta adicionar um nome ao slot. Vamos ver um exemplo. Vamos criar um componente chamado `Card` que terá três blocos: header, body e footer. O bloco header será passado por meio de um slot nomeado `header`, o bloco body será passado por meio de um slot padrão e o bloco footer será passado por meio de um slot nomeado `footer`. Para isso, crie um novo arquivo chamado `Card.vue` no diretório `src/components` e adicione o seguinte código:

```html
<script setup></script>

<template>
  {% raw %}
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
  {% endraw %}
</template>

<style scoped>
  .card {
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 2px gray;
  }

  .header {
    background-color: lightgray;
    padding: 10px;
    border-radius: 5px 5px 0 0;
  }

  .body {
    padding: 10px;
  }

  .footer {
    background-color: lightgray;
    padding: 10px;
    border-radius: 0 0 5px 5px;
  }
</style>
```

Com o código acima, criamos um componente chamado `Card` que tem três slots nomeados: `header`, `footer` e um slot padrão. O bloco header é passado por meio do slot nomeado `header`, o bloco footer é passado por meio do slot nomeado `footer` e o bloco body é passado por meio do slot padrão. O conteúdo passado para o slot padrão será renderizado no local onde a tag `<slot></slot>` foi definida. O conteúdo passado para os slots nomeados será renderizado no local onde a tag `<slot name="nome-do-slot"></slot>` foi definida. Para utilizar o componente `Card`, substitua o código no arquivo `src/App.vue`, como segue:

```html
<script setup>
  import Card from './components/Card.vue';
</script>

<template>
  <div>
    <Card>
      <p>Body</p>
      <template #header>
        <h1>Header</h1>
      </template>
      <template #footer>
        <p>Footer</p>
      </template>
    </Card>
  </div>
</template>
```

Note que para passar conteúdo para um slot nomeado, é necessário utilizar a tag `<template #nome-do-slot></template>`. Ainda, no caso do slot padrão, é possível passar o conteúdo diretamente, sem a necessidade de utilizar a tag `<template></template>`.

## Slots condicionais

É possível definir slots condicionais. Para isso, basta adicionar uma diretiva `v-if` ao slot. O conteúdo do slot será renderizado caso a condição seja verdadeira. Vamos ver um exemplo. Vamos adicionar uma diretiva `v-if` ao slot do componente `Card`. O conteúdo do slot será renderizado caso a condição seja verdadeira. Para isso, substitua o código no arquivo `src/components/Card.vue`, no bloco _template_, como segue:

```html
<template>
  {% raw %}
  <div class="card">
    <div v-if="$slots.header" class="header">
      <slot name="header" />
    </div>

    <div class="body">
      <slot>
        <p>Conteúdo padrão do card</p>
      </slot>
    </div>

    <div v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </div>
  </div>
  {% endraw %}
</template>
```

Nesse caso, o bloco header será renderizado caso o slot nomeado `header` seja passado, o bloco body será renderizado caso o slot padrão seja passado e o bloco footer será renderizado caso o slot nomeado `footer` seja passado. Se o slot não for passado, o bloco correspondente não será renderizado. Veja o exemplo abaixo, editando o arquivo `src/App.vue`:

```html
<script setup>
  import Card from './components/Card.vue';
</script>

<template>
  <div>
    <Card>
      <template #header>
        <h1>Header</h1>
      </template>
      <p>Body</p>
    </Card>
  </div>
</template
```

Nesse caso, o bloco header será renderizado, mas o bloco footer não será renderizado, pois o slot nomeado `footer` não foi passado. Note também que nem todos os slots precisam ser condicionais. No exemplo acima, o bloco body não é condicional, e o conteúdo padrão será renderizado caso o slot padrão não seja passado.

# Conclusão

Nesta aula, vimos como passar conteúdo para um componente por meio de slots. Vimos como definir um slot padrão, um slot com conteúdo padrão, slots nomeados e slots condicionais. Com slots, é possível criar componentes mais flexíveis e reutilizáveis. Em resumo, slots são uma forma de passar conteúdo para um componente de forma dinâmica e flexível. Na próxima aula, veremos como enviar eventos de um componente filho para um componente pai.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Propriedades de componentes - Recursos diversos
(propriedades-outros-recursos.html 'Anterior')</span><span>[Eventos &gt;](eventos.html 'Próximo')</span></span>
