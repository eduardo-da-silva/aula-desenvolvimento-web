---
title: 'Instalando e configurando o Pinia'
permalink: /gerenciamento-estados/configuracao-pinia
---

# Instalando o Pinia

O Pinia pode ser instalado direto na criação do projeto, escolhendo a opção:

```bash
✔ Add Pinia for state management? … No / Yes
```

Contudo, como já temos um projeto criado, vamos instalar o Pinia manualmente. Para isso, execute o seguinte comando:

```bash
npm install pinia
```

Em seguida, editamos o arquivo `src/main.js` e importamos o `createPinia` do Pinia e o `pinia` do Vue. Em seguida, criamos uma instância do Pinia e a associamos ao Vue:

```js
...
import { createApp } from 'vue'

...
app.use(createPinia())
...
```

A versão final do arquivo `src/main.js` deve ser semelhante a esta:

```js
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
```

Com isso, o Pinia está instalado e configurado no projeto. O comando `createPinia()` cria uma instância do Pinia e a associa ao Vue, permitindo que o estado da aplicação seja gerenciado de forma global.

Na próxima etapa vamos criar um _store_ global para armazenar as informações sobre os produtos.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Anterior')</span> <span>[Estados dos produtos &gt;](estado-produtos.html 'Próximo')</span></span>
