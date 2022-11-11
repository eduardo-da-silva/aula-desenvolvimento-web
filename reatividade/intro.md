---
title: "Fundamentos de Reatividade"
description: Introdução aos conceitos de reatividade
permalink: /reatividade
---
# Índice da aula
1. [Variáveis reativas](reatividade/variaveis-reativas.html)
2. [Propriedades computadas](reatividade/propriedades-computadas.html)
3. [Exercícios](reatividade/exercicios.html)


# Reatividade

Reatividade é um conceito que diz que o estado de um objeto pode ser alterado e que os objetos que dependem desse estado serão atualizados automaticamente. Uma das características mais importantes do VueJS é a reatividade. Esse termo é muito utilizado em programação funcional, onde a reatividade é um conceito muito importante. No VueJS, a reatividade é implementada através de um sistema de observação de dados. Quando um dado é alterado, o VueJS atualiza automaticamente a interface do usuário.

De forma bem simplificada, podemos considerar que a reatividade é a forma de criar variáveis no VueJs. É fato que uma variável no VueJS pode ser criada usando os usuais comando `let` ou `const`, mas isso não é o suficiente para que o VueJS entenda que aquela variável é reativa. Para que o VueJS entenda que uma variável é reativa, é necessário que ela seja declarada usando a função `reactive`, `ref` ou `$ref`. Essas funções são chamadas de funções reativas.

Recapitulando, podemos dizer que a reatividade é a forma de criar variáveis reativas no VueJS que, quando elas alteradas, o VueJS atualiza automaticamente a interface do usuário.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. "Início")</span> <span>[Variáveis reativas &gt;](reatividade/variaveis-reativas.html "Próximo")</span></span>
