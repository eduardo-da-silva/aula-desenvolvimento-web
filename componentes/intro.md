---
title: 'Componentes'
description: Tópicos da aula de componentes
permalink: /componentes/
---

<!-- # Índice da aula
2.1. [Exemplos de uso](axios/exemplos-de-uso.md)
2.2. [Uso no projeto Times-Jogadores](axios/uso-times-jogadores.md)  -->

<!-- 1. Criar e registrar componentes
   1. Registro global
   2. Registro local

2. Propriedades
    1. Array de strings
    2. Objetos, sendo chave o nome da propriedade e valor o tipo da propriedade
        * Tipos: String, Number, Boolean, Object, Array, Function, Promise
        * Uso do v-bind, exceto no caso de strings
        * Caso do Boolean
        * Uso de v-bind = objeto para associar todas as propriedades
    3. Propriedades com valor padrão
    4. Fluxo unidirecional
        * Valor inicial alterado via data ou manipulado via computed
        * Importante: objetos e arrays são enviados por referência

3. Atributos não-propriedade
    1. Associados ao elemento raiz
    2. Pode ser associado a um sub-elemento. Uso do `inheritAttts: false` e `v-bind="$attrs"`

4. Eventos
    1. Uso de $emit
    2. Definição dos emits para documentação

5. Slots
    1. Definição de slots
    2. Valor padrão
    3. Slots nomeados
    4. Uso de templates com v-slot e com abreviações   -->

# Introdução

**Objetivo:** Ter uma visão geral do funcionamento dos componentes em VueJS.

# Conceito de componentes

Componentes são instâncias reutilizáveis de VueJS que podem ser criadas e utilizadas em qualquer parte da aplicação. Eles são compostos por um template, que define a estrutura do componente, e por uma instância Vue, que define o comportamento do componente.

Os componentes são uma das principais características do VueJS e são muito úteis para organizar e reutilizar o código de uma aplicação. Eles permitem dividir a interface de usuário em partes menores e independentes, o que facilita a manutenção e a evolução da aplicação.

No VueJS, em geral, usamos o conceito de SFC (Single File Component) para criar componentes. Um SFC é um arquivo que contém o template, a lógica e o estilo de um componente em um único lugar, como já temos visto em aulas anteriores.

Durante esta aula, vamos aprender a criar e registrar componentes em VueJS, a passar propriedades para os componentes, a emitir eventos a partir dos componentes e a usar slots para passar conteúdo para os componentes.

Alguns conceitos de reutilização de componentes farão mais sentido quando estudarmos o conceitos de rotas, com o Vue Router. Isso porque a reutilização de componentes é muito útil quando se trabalha com rotas dinâmicas e a criação de páginas com elementos comuns.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Início')</span> <span>[Criação de componentes &gt;](criacao.html 'Próximo')</span></span>
