---
title: "Instalação e criação de um aplicação"
permalink: /intro/criar-aplicacao-vuejs.html
---

### Introdução

Criar um primeiro projeto usando o VueJS.

### Preparação

* Garantir que os passos da [Aula 0](../ambiente/) foram executados.
* Crie uma nova pasta para o seu projeto e abra no VSCode.
* Abra a **pasta** do projeto no vscode (repita em voz alta: _"Nunca abra um arquivo, sempre abra a pasta."_).


# Criação de uma aplicação VueJS

Supondo que você esteja em um projeto vazio no VSCode. Para criar uma aplicação VueJS, abra o terminal e execute o comando:

```bash
npm init vue@latest .
```

*Note que usamos a opção `.` para criar a aplicação na pasta atual. Caso você não queira criar a aplicação na pasta atual, basta informar o nome da pasta que deseja criar.*

O comando anterior irá criar uma aplicação VueJS usando uma ferramenta de scaffolding chamada `create-vue`. Ele apresentará uma série de perguntas para você. Responda conforme a seguir:

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit testing? … No
✔ Add Cypress for both Unit and End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

Scaffolding project in ./<your-project-name>...
Done.
```

Note que no exemplo anterior, escolhemos não usar o Vue Router, Pinia, Vitest, Cypress, ESLint e Prettier, bem como o suporte ao TypeScript e JSX. Você pode escolher o que desejar.

Em seguida, basta executar os seguintes comandos:

```bash
npm install
npm run dev
```

O primeiro comando instala as dependências do projeto. O segundo comando executa o servidor de desenvolvimento do VueJS.