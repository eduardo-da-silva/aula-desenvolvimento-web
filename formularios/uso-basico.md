---
title: 'Uso básico'
permalink: /formularios/uso-basico
---

# Entrada de textos

Em formulários, a entrada de dados é feita através de campos de texto. Para criar um campo de texto, basta usar a diretiva `v-model`:

```html
<script setup>
  import { ref } from 'vue';

  const nome = ref('');
</script>

<template>
  <input v-model="nome" />
  <p>Nome digitado é: {% raw %} {{ nome }} {% endraw %}</p>
</template>
```

O código acima cria um campo de texto que permite que o usuário digite um nome. O valor digitado pelo usuário é armazenado na variável `nome`. A variável `nome` é reativa, ou seja, o valor do campo de texto é atualizado automaticamente quando o valor da variável `nome` é alterado.

## Tipos de entrada

O tipo de entrada de texto pode ser definido usando o atributo `type`:

```html
<input type="text" v-model="nome" />
<input type="password" v-model="senha" />
<input type="email" v-model="email" />
<input type="number" v-model="idade" />
```

## Tamanho

O atributo `size` define o tamanho do campo de texto:

```html
<input type="text" v-model="nome" size="20" />
```

## Máximo de caracteres

O atributo `maxlength` define o número máximo de caracteres que podem ser digitados no campo de texto:

```html
<input type="text" v-model="nome" maxlength="20" />
```

## Mínimo de caracteres

O atributo `minlength` define o número mínimo de caracteres que podem ser digitados no campo de texto:

```html
<input type="text" v-model="nome" minlength="3" />
```

# Textos em múltiplas linhas

Para a inserção de textos em múltiplas linhas, usa-se a tag `textarea`:

```html
<script setup>
  import { ref } from 'vue';

  const texto = ref('');
</script>

<template>
  <textarea v-model="texto" />
  <p style="white-space: pre-line;">
    Texto digitado é: {% raw %} {{ texto }} {% endraw %}
  </p>
</template>
```

## Tamanho

O atributo `cols` define o número de colunas do campo de texto:

```html
<textarea v-model="texto" cols="20" />
```

## Número de linhas

O atributo `rows` define o número de linhas do campo de texto:

```html
<textarea v-model="texto" rows="5" />
```

# Checkbox

O componente `input` pode ser usado para criar um checkbox:

```html
<script setup>
  import { ref } from 'vue';

  const aceitaTermos = ref(false);
</script>

<template>
  <label for="aceitaTermos">Aceito os termos</label>
  <input type="checkbox" v-model="aceitaTermos" />
  <p>Aceita os termos: {% raw %} {{ aceitaTermos }} {% endraw %}</p>
</template>
```

## Valores

O atributo `value` define o valor que será armazenado na variável reativa quando o checkbox for marcado:

```html
<input type="checkbox" v-model="aceitaTermos" value="sim" />
```

# Multiple checkbox

Para criar um checkbox que permite a seleção de múltiplos valores, usa-se a diretiva `v-model` com um array:

```html
<script setup>
  import { ref } from 'vue';

  const cores = ref([]);
</script>

<template>
  <label for="cores">Cores favoritas</label>
  <input type="checkbox" v-model="cores" value="vermelho" /> Vermelho
  <input type="checkbox" v-model="cores" value="verde" /> Verde
  <input type="checkbox" v-model="cores" value="azul" /> Azul
  <p>Cores favoritas: {% raw %} {{ cores }} {% endraw %}</p>
</template>
```

# Radio

O componente `input` pode ser usado para criar um radio button:

```html
<script setup>
  import { ref } from 'vue';

  const sexo = ref('');
</script>

<template>
  <label for="sexo">Sexo</label>
  <input type="radio" v-model="sexo" value="masculino" /> Masculino
  <input type="radio" v-model="sexo" value="feminino" /> Feminino
  <p>Sexo: {% raw %}{{ sexo }}{% endraw %}</p>
</template>
```

# Select

O componente `select` pode ser usado para criar um campo de seleção:

```html
<script setup>
  import { ref } from 'vue';

  const sexo = ref('');
</script>

<template>
  <label for="sexo">Sexo</label>
  <select v-model="sexo">
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>
  <p>Sexo: {% raw %}{{ sexo }}{% endraw %}</p>
</template>
```

## Multiple select

Para criar um campo de seleção que permite a seleção de múltiplos valores, usa-se a diretiva `v-model` com um array:

```html
<script setup>
  import { ref } from 'vue';

  const cores = ref([]);
</script>

<template>
  <label for="cores">Cores favoritas</label>
  <select v-model="cores" multiple>
    <option value="vermelho">Vermelho</option>
    <option value="verde">Verde</option>
    <option value="azul">Azul</option>
  </select>
  <p>Cores favoritas: {% raw %}{{ cores }}{% endraw %}</p>
</template>
```

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Anterior')</span> <span>[Recursos diversos &gt;](recursos-diversos.html 'Próximo')</span></span>
