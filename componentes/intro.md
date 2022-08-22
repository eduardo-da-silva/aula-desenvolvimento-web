---
title: "Componentes"
description: Tópicos da aula de componentes
permalink: /componentes
---
<!-- # Índice da aula
2.1. [Exemplos de uso](axios/exemplos-de-uso.md)  
2.2. [Uso no projeto Times-Jogadores](axios/uso-times-jogadores.md)  -->

# Introdução

**Objetivo:** Ter uma visão geral do funcionamento dos componentes em VueJS.

Material de apoio para a aula de componentes: 
* [Material oficial em inglês](https://vuejs.org/guide/components/registration.html)
* [Material da equipe VuejJsBr](https://vuejsbr-docs-next.netlify.app/guide/component-registration.html)

# Tópicos de aula

1. Criar e registrar componentes    
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
    4. Uso de templates com v-slot e com abreviações  


[&lt; Início](../ "Início") 
<!-- <span style="display: inline-block;width: 60%"></span>
[Exemplos de uso do Axios &gt;](exemplos-de-uso.html "Próximo")   -->