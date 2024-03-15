---
title: 'Upload de imagens'
permalink: /formularios/upload-imagens
---

# Upload de imagens

Para fazer o upload de imagens, é necessário usar o componente `input` com o atributo `type` definido como `file`:

```html
<input type="file" />
```

Existem várias formas de integrar com o VueJS. Uma delas é usando um método para ser executado sempre que for feito o upload de uma imagem:

```html
<input type="file" id="avatarField" @change="handleFileUpload($event)" />
```

No método `handleFileUpload`, podemos acessar o arquivo selecionado pelo usuário:

```html
<script setup>
import { reactive } from 'vue'

const user = reactive({
  avatar: null
})

function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    user.avatar = URL.createObjectURL(file)
  }
}
```

Para que essa imagem seja exibida, podemos usar o componente `img` no bloco template, passando a propriedade `src` com o valor da imagem que foi carregada pelo usuário:

```html
<img :src="user.avatar" />
```

Note que podem ser utilizados estilos CSS para definir o tamanho da imagem e outros atributos para exibição.

O exemplo completo desse código para upload e exibição de imagens está abaixo:

```html
<script setup>
  import { reactive } from 'vue';

  const user = reactive({
    avatar: null,
  });

  function handleFileUpload(e) {
    const target = e.target;
    if (target && target.files) {
      const file = target.files[0];
      user.avatar = URL.createObjectURL(file);
    }
  }
</script>

<template>
  <div>
    <input type="file" id="avatarField" @change="handleFileUpload($event)" />
    <img v-if="user.avatar" :src="user.avatar" />
  </div>
</template>
```

<span style="display: flex; justify-content: space-between;"><span>[&lt; Recursos Diversos](recursos-diversos.html 'Anterior')</span> <span>[Exercícios &gt;](exercicios.html 'Próximo')</span></span>
