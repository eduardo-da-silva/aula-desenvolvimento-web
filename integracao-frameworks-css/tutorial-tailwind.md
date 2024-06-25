---
title: 'Tutorial para construção de um formulário com Tailwind'
permalink: /integracao-frameworks-css/tutorial-tailwind
---

# Tutorial para construção de um formulário com Tailwind

Neste tutorial, vamos construir um formulário simples como já realizado em aulas anteriores, mas agora utilizando o framework CSS Tailwind.

## Criando o projeto

Para criar o projeto, execute o comando abaixo:

```bash
npm init vue@latest formulario-tailwind
```

O comando anterior irá criar uma aplicação VueJS usando uma ferramenta de scaffolding chamada `create-vue`. Ele apresentará uma série de perguntas para você. Responda conforme a seguir (assumo que o nome da pasta e do projeto são iguais: `formulario-bootstrap`):

```bash
✔ Project name: … formulario-bootstrap
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit testing? … No
✔ Add Cypress for both Unit and End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
✔ Add Vue DevTools 7 extension for debugging? … Yes

Scaffolding project in ./formulario-bootstrap...
Done.
```

Abra a pasta criada no VSCode e execute os comandos abaixo:

```bash
npm install
npm run dev
```

Proceda com a instalação do Tailwind, executando o comando abaixo:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Em seguida, no arquivo `tailwind.config.js`, adicione dentro dos colchetes de "content", o caminho de seus arquivos para o framework saber aonde ele deve procurar pelas classes, para poder aplica-las.

```sh
'./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
```

Agora, vá na pasta assets(que está dentro de src), apague todos os arquivos dentro dela, e crie um arquivo chamado `tailwind.css` dentro do arquivo, inclua o seguinte código para importas as bibliotecas do Tailwind CSS.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

E então, na arquivo `main.js`, importe o arquivo criado.

```js
import './assets/tailwind.css';
```

## Limpando o projeto

Vamos limpar o projeto, removendo arquivos e códigos desnecessários. Edite o arquivo `src/App.vue` e substitua o conteúdo pelo código abaixo:

```html
<template>
  <div>
    <h1>Formulário de Cadastro de Produtos</h1>
  </div>
</template>
```

Remova todos os arquivos e subpastas da pasta `src/components`. Edite o arquivo `src/assets/main.css` e substitua o conteúdo pelo código abaixo:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'poppins', sans-serif;
  font-size: 24px;
}
```

Note que o arquivo `main.css` importa a fonte `Poppins` do Google Fonts e define o estilo padrão para o corpo da página.

## Criando a estrutura básica do formulário com um título editável

Vamos criar a estrutura básica do formulário. Edite o arquivo `src/App.vue`. O bloco `script` não mudará do que já vimos no exemplo de formulário anterior. Dessa forma, deixe como segue abaixo:

```javascript
<script setup>
import { reactive, ref } from 'vue'

const titulo = ref('Oi VueJs!')
const mostrarResultado = ref(false)

const categorias = [
  {
    id: 1,
    nome: 'Eletrônicos'
  },
  {
    id: 2,
    nome: 'Vestuário'
  },
  {
    id: 3,
    nome: 'Brinquedos'
  },
  {
    id: 4,
    nome: 'Móveis'
  },
  {
    id: 5,
    nome: 'Alimentos'
  },
  {
    id: 6,
    nome: 'Bebidas'
  },
  {
    id: 7,
    nome: 'Informática'
  },
  {
    id: 8,
    nome: 'Papelaria'
  }
]

const produto = reactive({
  nome: '',
  preco: 0,
  quantidade: 0,
  medida: '',
  categorias: []
})

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2).replace('.', ',')}`
}

function buscarNome(id) {
  return categorias.find(categoria => categoria.id === id).nome
}

</script>
```

Da mesma forma, o bloco de estilização ficará bem mais simples, visto que utilizaremos o Bootstrap. Dessa forma, deixe como segue abaixo:

```css
<style scoped>
.formulario,
.resultado {
  width: 48%;
  border-radius: 20px;
  padding: 20px
}

.formulario {
  background-color: #d29696
}

.resultado {
  background-color: #98e0aa;
}

.altera-titulo {
  background-color: #98e0aa;
  margin: 1rem 2rem;
  border-radius: 20px;
  padding: .75rem;
}
</style>
```

## Alterando o bloco de template

Por fim, vamos alterar o bloco `template` do arquivo `src/App.vue` e adicionar o código abaixo:

```html
{% raw %}
<template>
  <h1 class="">{{ titulo }}</h1>
  <div class="flex gap-3 py0 px-8">
    <div class="formulario">
      <h2>Cadastro do produto</h2>
      <div class="w-100 margin-y-3 m-2 flex justify-between align-center">
        <label>Nome:</label>
        <input
          class="flex-1 ms-2 p-2 text-lg rounded border-solid"
          type="text"
          v-model="produto.nome"
        />
      </div>
      <div class="w-100 margin-y-3 m-2 flex justify-between align-center">
        <label>Preço (em reais):</label>
        <input
          class="flex-1 ms-2 p-2 text-lg rounded border-solid"
          type="number"
          step="0.01"
          v-model="produto.preco"
        />
      </div>
      <div class="w-100 margin-y-3 m-2 flex justify-between align-center">
        <label for="">Quantidade:</label>
        <input
          class="flex-1 ms-2 p-2 text-lg rounded border-solid"
          type="number"
          v-model="produto.quantidade"
        />
      </div>

      <fieldset class="border p-1">
        <legend class="float-none w-auto p-2">Unidade de medida</legend>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="unidade"
            v-model="produto.medida"
          />
          Unidades
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="peso"
            v-model="produto.medida"
          />
          Peso
        </div>
      </fieldset>
      <fieldset class="border p-1">
        <legend class="float-none w-auto p-2">Categorias</legend>
        <div
          class="form-check"
          v-for="categoria in categorias"
          :key="categoria.id"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="categoria.id"
            v-model="produto.categorias"
          />
          {{ categoria.nome }}
        </div>
      </fieldset>
      <button
        type="button"
        class="bg-gray-300 text-black rounded p-2 mt-2"
        @click="mostrarResultado = !mostrarResultado"
      >
        Mostrar
      </button>
    </div>
    <div v-if="mostrarResultado" class="resultado">
      <h2>Dados do produto</h2>
      <p>Nome: {{ produto.nome }}</p>
      <p>Preço: {{ formatarPreco(produto.preco) }}</p>
      <p>Em estoque: {{ produto.quantidade }}</p>
      <p>Medida: {{ produto.medida }}</p>
      <p>Categorias: {{ produto.categorias }}</p>
      <h4>Categorias selecionadas:</h4>
      <p v-for="categoria_id in produto.categorias" :key="categoria_id">
        - {{ buscarNome(categoria_id) }}
      </p>
    </div>
  </div>
  <div class="altera-titulo">
    <label>Informe um novo título </label>
    <input
      class="w-400 p-2 text-lg rounded border-solid"
      type="text"
      v-model="titulo"
    />
  </div>
</template>
{% endraw %}
```

Note que o código acima é bem parecido com o que já vimos anteriormente. A diferença é que agora estamos utilizando classes do Tailwind CSS para estilizar o formulário. Sugiro que você teste o formulário e veja o resultado.

O código completo do projeto está disponível no [repositório do GitHub](https://github.com/eduardo-da-silva/formularios-2info-tailwind).

<span style="display: flex; justify-content: space-between;"> <span>[&lt; Integração com Tailwind](integracao-tailwind.html 'Anterior')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span>
