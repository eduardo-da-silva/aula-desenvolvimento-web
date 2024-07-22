---
title: 'Exercícios'
permalink: /componentes/exercicios
---

# Exercícios

1. O projeto consiste na criação de um formulário para edição do perfil de um usuário. O formulário deve conter os pelo menos os seguintes campos:

- Nome
- E-mail
- Senha
- Confirmação de senha
- Data de nascimento
- Endereço
- Cidade (este deve ser um campo do tipo string)
- Estado (Este deve ser um campo do tipo select, com as opções: AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO). Os valores armazenados devem ser os códigos dos estados, mas deve ser exibido o nome do estado.
- Hobbies
- Linguagens de programação
- Biografia

Esse formulário deve estar contido em um componente. Deve ser feito um segundo componente que irá exibir as informações preenchidas no formulário. No arquivo App.vue deve estar apenas um objeto reativo com as informações do usuário, e os dois componentes devem ser instanciados no template. No primeiro componente, deve ser feito o tratamento dos dados do formulário, e ao clicar em um botão, deve ser emitido um evento com os dados do usuário. O segundo componente deve receber esses dados e exibir na tela.

Também, deve ter uma opção para alternar entre a visualização do formulário e das informações preenchidas. Ao clicar em um botão, deve ser exibido o formulário, e ao clicar em outro botão, deve ser exibido o componente com as informações preenchidas.

Serão considerados os seguintes critérios de avaliação:

- Boas práticas de programação (indentação, nomes de variáveis, etc)
- Uso de HTML semântico
- Uso de CSS e organização da apresentação visual do formulário
- Funcionamento correto do formulário e do componente de exibição das informações
- Entrega do projeto no prazo
- Entrega do projeto no repositório Git
- Entrega de link para o deploy do projeto (surge, vercel ou outra plataforma a escolha)

<span style="display: flex; justify-content: space-between;"><span>[&lt; Eventos](eventos.html 'Voltar')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span>
