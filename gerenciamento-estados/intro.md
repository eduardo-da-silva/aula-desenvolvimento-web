---
title: 'Gerenciamento de estados'
description: Tópicos da aula de gerenciamento de estados
permalink: /gerenciamento-estados/
---

# Conceito de gerenciamento de estados

O gerenciamento de estados é uma parte importante do desenvolvimento de aplicações web. Ele é responsável por manter o estado da aplicação sincronizado com a interface de usuário, garantindo que as informações exibidas na tela estejam sempre atualizadas.

No Vue.js, o gerenciamento de estados é feito por meio de variáveis reativas, que são propriedades da instância Vue que podem ser monitoradas e reagir a mudanças. Quando uma variável reativa é alterada, o Vue.js automaticamente atualiza a interface de usuário para refletir essa mudança.

No entanto, vamos considerar a aplicação de exemplo que fizemos na aula anterior, para listagem e exclusão de produtos. Nessa aplicação, a listagem de produtos é feita por meio de um componente `ProductList`, que recebe um array de produtos como propriedade e emite um evento quando o usuário clica em um ícone de `lixeira` para excluir um produto.

Contudo, considere que o usuário clique no ícone de `lixeira` para excluir um produto. Nesse caso, o componente `ProductList` emite um evento para o componente pai, que é responsável por remover o produto da lista. A remoção do produto é refletida na interface de usuário, pois a variável reativa que armazena a lista de produtos é atualizada.

Porém se o usuário clicar para ver os detalhes de um produto e depois retornar para a listagem de produtos, a lista de produtos será recarregada para o estado inicial, ou seja, as alterações ou exclusões de produto são perdidas. Isso ocorre porque a lista de produtos é uma variável local do componente e não é compartilhada com outros componentes.

E esse comportamento pode ser um problema em aplicações maiores, onde vários componentes precisam compartilhar o mesmo estado. Para resolver esse problema, o Vue.js fornece uma solução chamada Pinia, que é uma biblioteca de gerenciamento de estados com uma interface simples e intuitiva.

## Pinia

Pinia é uma biblioteca de gerenciamento de estados para Vue.js que fornece uma maneira simples e intuitiva de compartilhar estados entre componentes.

Com Pinia, é possível criar um store global que armazena o estado da aplicação e compartilhá-lo com todos os componentes que precisam acessar ou modificar esse estado. Dessa forma, é possível manter o estado da aplicação sincronizado entre os diferentes componentes, garantindo que as informações exibidas na tela estejam sempre atualizadas.

Nas próximas aulas, vamos aprender a criar um store global com Pinia e utilizá-lo para gerenciar o estado da aplicação. Vamos ver como definir o estado da aplicação, como acessar e modificar esse estado a partir dos componentes e como reagir a mudanças no estado para atualizar a interface de usuário.

Também, partiremos da aplicação de exemplo que fizemos na aula anterior, quando estudamos os conceitos do `vue-router`. A aplicação em questão faz a listagem e exclusão de produtos, e vamos refatorá-la para utilizar Pinia. Vamos ver como criar um store global para armazenar a lista de produtos e como compartilhar esse estado entre os diferentes componentes da aplicação.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Início')</span> <span>[Configurando o Pinia &gt;](configurando-pinia.html 'Próximo')</span></span>
