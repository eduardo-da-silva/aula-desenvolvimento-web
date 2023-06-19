---
title: "Componentes com conteúdo"
permalink: /componentes/conteudo
---

# Componentes com conteúdo

Para exemplificar o uso de componentes com conteúdo, vamos partir do 'carrinho de compras' que estamos desenvolvendo. Ele está disponível [aqui](https://github.com/eduardo-da-silva/shopping-cart-2infos-2023).

Faremos uma modificação no componente MButton, para que ele possa receber um conteúdo dinâmico. Para isso, vamos usar a propriedade `slot`.

## Propriedade slot

A propriedade `slot` é usada para definir um espaço reservado para conteúdo dinâmico. Ela é usada no componente que receberá o conteúdo. Por exemplo, no componente MButton, vamos adicionar a propriedade `slot` no elemento `button`. No caso do arquivo `MButton.vue`, vamos alterar apenas o bloco de `template`, como no exemplo abaixo:

```html
...
<template>
  <button>
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>
...
```

## Usando uma biblioteca de ícones

Para exemplificar o uso de conteúdo dinâmico, vamos usar uma biblioteca de ícones. Nesse caso, vamos usar a biblioteca `vue-material-design-icons`. Para instalar a biblioteca, vamos usar o comando abaixo:

```bash
npm install vue-material-design-icons
``` 

Uma lista com os ícones disponíveis pode ser encontrada [aqui](https://pictogrammers.com/library/mdi/). Para usar um ícone, vamos importá-lo no componente que o usará. 

## Editando a chamada do componente MButton no componente CardLivro

Para exemplificar o uso de conteúdo dinâmico, vamos alterar o componente `CardLivro.vue`. Vamos modificar o botão que tem o texto 'Adicionar ao carrinho' e 'Compartilhar'. Vamos fazer as seguintes alterações no arquivo:

* No bloco `script`, vamos importar os ícones `cart-plus` e `share-variant` da biblioteca `vue-material-design-icons`:

```js
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import ShareVariant from 'vue-material-design-icons/ShareVariant.vue'
```

* No bloco `template`, vamos alterar o botão que tem o texto 'Adicionar ao carrinho':

```html
<m-button @click="emit('adicionarAoCarrinho', props.livro)">
    <cart-plus />
</m-button>
<m-button> <share-variant /> </m-button>
```

Note que os ícones forem usados como conteúdo dinâmico do componente `MButton`, que foi definido no bloco `template` do componente `MButton`. É possível também ter um texto ao lado do ícone, como no exemplo abaixo:

```html
<m-button @click="emit('adicionarAoCarrinho', props.livro)">
    <cart-plus /> Adicionar ao carrinho
</m-button>
```

Nesse caso, o texto 'Adicionar ao carrinho' será renderizado no espaço reservado para conteúdo dinâmico, definido pela propriedade `slot` do componente `MButton`.

## Mudando as cores dos botões

Para mudar as cores dos botões, vamos usar a propriedade `class` do componente `MButton`. Essa propriedade pode receber os valores `primario`, `secundario`, `terciario`, `sucesso`, `alerta`, `perigo`, `info`, `escuro` e `claro`. Inicialmente, vamos alterar o componente `MButton` para que ele possa receber a propriedade `class`. Para isso, vamos alterar o bloco `style` do componente `MButton` e adicionar as seguintes entradas:

```js
.primario {
  background-color: #007bff;
}
.primario:hover {
  background-color: #0069d9;
}

.secundario {
  background-color: #6c757d;
}
.secundario:hover {
  background-color: #5a6268;
}

.terciario {
  background-color: #28a745;
}
.terciario:hover {
  background-color: #218838;
}

.perigo {
  background-color: #dc3545;
}
.perigo:hover {
  background-color: #c82333;
}
.alerta {
  background-color: #ffc107;
}
.alerta:hover {
  background-color: #e0a800;
}
.sucesso {
  background-color: #28a745;
}
.sucesso:hover {
  background-color: #218838;
}
.info {
  background-color: #17a2b8;
}
.info:hover {
  background-color: #138496;
}
.escuro {
  background-color: #343a40;
}
.escuro:hover {
  background-color: #23272b;
}
.claro {
  background-color: #f8f9fa;
}
.claro:hover {
  background-color: #dae0e5;
}
```

Agora, vamos alterar o componente `CardLivro.vue` para que ele possa enviar a propriedade `class`. Para isso, vamos alterar o bloco `template` do componente `CardLivro.vue`, na chamada do componente `MButton`, como no exemplo abaixo:

```html
<m-button class="secundario" @click="emit('adicionarAoCarrinho', props.livro)">
    <cart-plus />   
</m-button>
<m-button class="sucesso"> <share-variant /> </m-button>
```

## Exercícios

1. Utilize outros ícones e cores nas outras chamadas de botões do projeto em andamento.