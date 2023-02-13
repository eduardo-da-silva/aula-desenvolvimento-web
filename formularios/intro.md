---
title: "Interligação em formulários"
description: Introdução aos conceitos de interligação em formulários
permalink: /formularios
---
# Índice da aula
1. [Variáveis reativas](reatividade/variaveis-reativas.html)
2. [Propriedades computadas](reatividade/propriedades-computadas.html)
3. [Exercícios](reatividade/exercicios.html)

# Interligação em formulários

A interligação em formulários é um conceito muito importante no VueJS. Esta é a forma de criar variáveis reativas que são vinculadas a elementos de formulários. Quando o usuário interage com o formulário, a variável reativa é alterada e o VueJS atualiza automaticamente a interface do usuário, se necessário. Contudo, também é forma de se alterar o valor das variáveis reativas para serem utilizadas por métodos invocados pelo formulário ou por outros elementos da interface do usuário.

Em linhas gerais, sempre que se deseja trabalhar com formulários usando HTML e JavaScript, é necessário criar variáveis que serão vinculadas aos elementos de formulários. Essas variáveis são chamadas de variáveis de modelo. Quando o usuário interage com o formulário, o valor das variáveis de modelo é alterado. Quase sempre são utilizados os eventos `change` ou `input` para alterar o valor das variáveis de modelo. O VueJS possui uma forma mais simples de se trabalhar com formulários, que é a interligação em formulários.

De forma bem resumida, pois o assunto será melhor explorado nas próximas seções, o exemplo abaixo mostra como criar uma variável reativa que é vinculada a um elemento de formulário. O valor da variável reativa é alterado quando o usuário interage com o formulário.

```html
<script setup>
import { ref } from 'vue'
const texto = ref('')
</script>

<template>
    <div>
        <input type="text" v-bind:value="texto" v-on:input="event => texto = event.target.value" />
        <p>Texto digitado: {% raw %}{{ texto }}{% endraw %}</p>
    </div>
</template>
```

Neste exemplo, algumas coisas importantes acontecem:

* a variável reativa `texto` é vinculada ao elemento de formulário `<input>`, usando a diretiva `v-bind:value`. 
* é importante relembrar que o elemento `input` possui um atributo `value` que é utilizado para definir o valor inicial do elemento. Quando o usuário interage com o elemento, o valor do atributo `value` é alterado.  
* a diretiva `v-on:input` é utilizada para vincular o evento `input` ao elemento de formulário. Quando o evento `input` é disparado, o valor da variável reativa `texto` é alterado.
* ao acontecer uma alteração no elemento `input`, é executada a função anônima que altera o valor da variável reativa `texto`. 
* a função anônima recebe como parâmetro o evento `event`, que é o evento que ocorreu no elemento `input`. O evento `event` possui uma propriedade `target`, que é o elemento que disparou o evento. A propriedade `target` possui uma propriedade `value`, que é o valor atual do elemento `input`. 
* assim, o valor da variável reativa `texto` é alterado para o valor atual do elemento `input`.
* por fim, o valor da variável reativa `texto` é exibido na tela, usando a sintaxe de interpolação `{{ texto }}`.

É importante relembrar que as diretivas `v-bind:value` e `v-on:input` podem ser abreviadas para `:value` e `@input`, respectivamente. Assim, o bloco de templates do exemplo acima pode ser escrito da seguinte forma:

```html
<template>
    <div>
        <input type="text" :value="texto" @input="event => texto = event.target.value" />
        <p>Texto digitado: {% raw %}{{ texto }}{% endraw %}</p>
    </div>
</template>
```

Por fim, podemos usar uma associação em dois sentidos, ou seja, o valor da variável reativa `texto` é alterado quando o usuário interage com o elemento `input`, mas também é possível alterar o valor do elemento `input` quando o valor da variável reativa `texto` é alterado. Para isso, é necessário utilizar a diretiva `v-model` no elemento `input`. A diretiva `v-model` é uma abreviação para as diretivas `v-bind:value` e `v-on:input`. Assim, o bloco de templates do exemplo acima pode ser escrito da seguinte forma:

```html
<template>
    <div>
        <input type="text" v-model="texto" />
        <p>Texto digitado: {% raw %}{{ texto }}{% endraw %}</p>
    </div>
</template>
```
A partir deste ponto, vamos considerar sempre o uso da diretiva `v-model` para vincular variáveis reativas a elementos de formulários, a não ser que seja necessário utilizar a diretiva `v-bind:value` e `v-on:input` separadamente.

As próximas seções vão apresentar mais detalhes sobre a interligação em formulários.