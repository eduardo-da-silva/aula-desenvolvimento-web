---
title: 'Tutorial para construção de um formulário'
permalink: /formularios/tutorial
---

# Tutorial para construção de um formulário

Neste tutorial, vamos construir um formulário simples para cadastro de um produto. O formulário terá os campos de nome, quantidade, preço, categorias e imagem.,

## Criando o projeto

Para criar o projeto, execute o comando abaixo:

```bash
npm init vue@latest formulario
```

O comando anterior irá criar uma aplicação VueJS usando uma ferramenta de scaffolding chamada `create-vue`. Ele apresentará uma série de perguntas para você. Responda conforme a seguir (assumo que o nome da pasta e do projeto são iguais: `exemplo-inicial-vue3`):

```bash
✔ Project name: … formulario-vue3
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit testing? … No
✔ Add Cypress for both Unit and End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
✔ Add Vue DevTools 7 extension for debugging? … Yes

Scaffolding project in ./formulario-vue3...
Done.
```

Abra a pasta criada no VSCode e execute os comandos abaixo:

```bash
npm install
npm run dev
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

Vamos criar a estrutura básica do formulário. Edite o arquivo `src/App.vue` e substitua o conteúdo pelo código abaixo:

```html
<script setup>
  import { ref, reactive } from 'vue';
  const titulo = ref('Formulário de Cadastro de Produtos');
</script>

<template>
  <h1>{{ titulo }}</h1>

  <div class="altera-titulo">
    <h2>Informe um novo título:</h2>
    <input type="text" v-model="titulo" />
  </div>
</template>
```

Até esse ponto, o formulário exibe um título e um campo de texto para alterar o título. O título é uma variável reativa que é vinculada ao elemento `h1` e ao campo de texto. Quando o campo de texto é alterado, o título é atualizado automaticamente. Também importamos as funções `ref` e `reactive` do VueJS. A função `reactive` ainda não está sendo utilizada, mas será utilizada posteriormente.

Vamos fazer uma estilização básica da classe `altera-titulo`. Adicione o bloco `style scoped` neste arquivo de componente, com o seguinte conteúdo:

```css
<style scoped>
.altera-titulo {
  background-color: #98e0aa;
  margin: 1rem 2rem;
  border-radius: 20px;
  padding: .75rem;
  display: flex;
  gap: 1rem
}
</style>
```

Vamos criar uma `div` que conterá o formulário. Adicione o código abaixo entre o `h1` e a div `altera-titulo`:

```html
<div class="container">
  <div class="formulario">
    <h2>Formulário para cadastro do produto</h2>
    <div class="row">
      <label for="">Nome:</label>
      <input type="text" v-model="produto.nome" />
    </div>
    <div class="row">
      <label for="">Preço (em reais):</label>
      <input type="number" step="0.01" v-model="produto.preco" />
    </div>
    <div class="row">
      <label for="">Quantidade:</label>
      <input type="number" v-model="produto.quantidade" />
    </div>

    <fieldset>
      <legend>Unidade de medida</legend>
      <div class="items-radiobox">
        <input type="radio" value="unidade" v-model="produto.medida" /> Unidades
        <input type="radio" value="peso" v-model="produto.medida" /> Peso
      </div>
    </fieldset>
    <fieldset>
      <legend>Categorias</legend>
      <div class="items-checkbox">
        <template v-for="categoria in categorias" :key="categoria.id">
          <input
            type="checkbox"
            :value="categoria.id"
            v-model="produto.categorias"
          />
          {{ categoria.nome }}
        </template>
      </div>
    </fieldset>
    <button @click="mostrarResultado = !mostrarResultado">Mostrar</button>
  </div>
</div>
```

O código acima cria um formulário com os campos de nome, preço, quantidade, unidade de medida, categorias e um botão para mostrar o resultado. O formulário é estilizado com as classes `container`, `formulario`, `row`, `items-radiobox` e `items-checkbox`. A variável `produto` é um objeto reativo que armazena os dados do produto. A variável `categorias` é um array de objetos que armazena as categorias disponíveis para o produto. A variável `mostrarResultado` é uma variável reativa que controla a exibição do resultado.

Para ter um funcionamento básico, precisamos proceder com a estilização e com a criação das variáveis reativas. Adicione o código a seguir no bloco `setup` (pode estar logo abaixo da declaração da variável `titulo`):

```javascript
const produto = reactive({
  nome: '',
  preco: 0,
  quantidade: 0,
  medida: '',
  categorias: [],
});
```

Também temos a declaração da variável `categorias`. Adicione o código a seguir no bloco `setup` (pode estar logo abaixo da declaração da variável `produto`):

```javascript
const categorias = [
  {
    id: 1,
    nome: 'Eletrônicos',
  },
  {
    id: 2,
    nome: 'Vestuário',
  },
  {
    id: 3,
    nome: 'Brinquedos',
  },
  {
    id: 4,
    nome: 'Móveis',
  },
  {
    id: 5,
    nome: 'Alimentos',
  },
  {
    id: 6,
    nome: 'Bebidas',
  },
  {
    id: 7,
    nome: 'Informática',
  },
  {
    id: 8,
    nome: 'Papelaria',
  },
];
```

Por fim, o botão `Mostrar` será utilizado para manipular uma variável reativa booleana, que exibirá o resultado do formulário. Adicione o código a seguir no bloco `setup` (pode estar logo abaixo da declaração da variável `categorias`):

```javascript
const mostrarResultado = ref(false);
```

Agora, vamos proceder com a estilização, adicionando o código seguinte no bloco `style scoped` (note que você deve manter o código atual):

```css
.container {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 1rem;
  padding: 0 2rem;
}

.formulario,
.resultado {
  width: 45vw;
  min-height: 70vh;
  border-radius: 20px;
  padding: 20px;
}

.formulario {
  background-color: #d29696;
}

.formulario .row {
  width: 80%;
  margin: 1.3rem 0;
  display: flex;
  justify-content: space-between;
}

.items-checkbox,
.items-radiobox {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.resultado {
  background-color: #98e0aa;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #e1e1e1;
}
```

Note que a estilização define a largura e a altura dos elementos `formulario` e `resultado`, além de estilizar os elementos `row`, `items-checkbox`, `items-radiobox` e `button`. Já criamos a configuração da classe `resultado`, mas ainda não a utilizamos. Vamos criá-la posteriormente.

## Exibindo o resultado do formulário

Vamos adicionar a exibição do resultado do formulário. Vamos editar o bloco `template` do arquivo `src/App.vue` e adicionar o código abaixo, dentro da `div` com a classe `container`, logo após a `div` com a classe `formulario`:

```html
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
```

O código acima exibe os dados do produto, incluindo o nome, o preço, a quantidade, a medida e as categorias. As categorias são exibidas como uma lista de itens. Para exibir o resultado, precisamos criar duas funções auxiliares: `formatarPreco` e `buscarNome`. Adicione o código a seguir no bloco `setup` (pode estar logo abaixo da declaração da variável `mostrarResultado`):

```javascript
function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

function buscarNome(id) {
  return categorias.find((categoria) => categoria.id === id).nome;
}
```

No código acima, a função `formatarPreco` recebe um número e retorna uma string formatada como um valor monetário. A função `buscarNome` recebe um id de categoria e retorna o nome da categoria correspondente.

## Alguns ajustes finais de estilização

Para finalizar, vamos editar o arquivo `src/assets/main.css` e adicionar o código abaixo:

```css
input {
  width: 400px;
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  border: 1px solid transparent;
}

input[type='checkbox'],
input[type='radio'] {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

input:hover {
  border: 1px solid black;
}
```

Com isso, a estilização do formulário está completa. Agora, você pode testar o formulário e ver o resultado.

O código completo do projeto está disponível no [repositório do GitHub](https://github.com/eduardo-da-silva/formulario-basico-2infos-2024).

<span style="display: flex; justify-content: space-between;"> <span>[&lt; Upload de imagens](upload-imagens.html 'Anterior')</span> <span>[Exercícios &gt;](exercicios.html 'Próximo')</span></span
