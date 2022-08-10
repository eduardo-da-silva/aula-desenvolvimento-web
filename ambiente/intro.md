---
title: "Ambiente de desenvolvimento"
description: Configuração do ambiente de desenvolvimento no Linux
permalink: /ambiente
---
<!-- # Índice da aula
2.1. [Exemplos de uso](axios/exemplos-de-uso.md)  
2.2. [Uso no projeto Times-Jogadores](axios/uso-times-jogadores.md)  -->

# Introdução

**Objetivo:** Configurar o ambiente de desenvolvimento, com NodeJS e Git.

## Instalação da versão LTS do NodeJS

Recomendo a utilização do `nvm`, que permite a utilização de versões diferentes do NodeJS. O nvm é gerenciador de versões do NodeJs, desenvolvido para ser instalado utilizando a conta de um usuário final.

Para instalar ou atualizar o o `nvm`, execute o comando abaixo:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Após a instalação, é necessário atualizar as variáveis de ambiente do seu terminal. Para tal, sugiro fechar o terminal e abrir novamente. Em seguida, você pode instalar a versão LTS do NodeJS:

```bash
nvm install --lts
```

## Configuração das variáveis de ambiente do GIT

Considerando que o `git` já esteja instalado em seu ambiente, sugiro configurar as variáveis de ambiente com as informações do usuário e email para registros nos _commits_ do repositório. Para isso, execute os seguintes comandos:

```bash
git config --global user.name "Nome do usuário"
```
e 

```bash
git config --global user.email "email@dominio.com"
```

## Extensões recomendadas do Visual Studio Code

Eu sugiro que você instale as seguintes extensões para o Visual Studio Code:

* [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
* [Portuguese (Brazil) Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-pt-BR)
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=code-spell-checker.code-spell-checker)
* [Brazilian Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian)
* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons)

Você pode instalar outras extensões e fazer configurações adicionais, conforme a sua preferência.

[&lt; Início](../ "Início") 
<!-- <span style="display: inline-block;width: 60%"></span>
[Exemplos de uso do Axios &gt;](exemplos-de-uso.html "Próximo")   -->