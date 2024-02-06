---
title: 'Fundamentos de Reatividade'
description: Introdução aos conceitos de reatividade
permalink: /reatividade/
---

# Índice da aula

1. [Variáveis reativas](reatividade/variaveis-reativas.html)
2. [Propriedades computadas](reatividade/propriedades-computadas.html)
3. [Exercícios](reatividade/exercicios.html)

# Reatividade

Uma das características mais importantes do VueJS é a reatividade, que define que quando o estado de um objeto é alterado, os objetos que dependem desse estado são atualizados automaticamente. No VueJS, a reatividade é implementada através de um sistema de observação de dados. Assim, quando um dado é alterado, o VueJS atualiza automaticamente a interface do usuário.

De forma bem simplificada, podemos considerar que a reatividade é a forma de criar variáveis no VueJs. É fato que uma variável no VueJS pode ser criada usando os usuais comando `let` ou `const`, mas isso não é o suficiente para que o VueJS entenda que aquela variável é reativa. Para que o VueJS entenda que uma variável é reativa, é necessário que ela seja declarada usando a função `reactive` ou`ref`, que são conhecidas como funções reativas.

Recapitulando, podemos dizer que a reatividade, no VueJS, é a forma de criar variáveis que, quando alteradas, o seu valor é atualizado automaticamente na interface do usuário, e vice-versa.

Outro conceito importante é o de propriedades computadas, que são funções que são executadas automaticamente quando uma variável reativa é alterada. Essas funções também serão apresentadas nesta aula.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Início')</span> <span>[Variáveis reativas &gt;](reatividade/variaveis-reativas.html 'Próximo')</span></span>
