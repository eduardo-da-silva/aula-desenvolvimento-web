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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Em seguida, edite o arquivo `~/.zshrc` e adicione as seguintes linhas:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
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

<!-- ## Configurações do ESLint e do Prettier em projetos Vue

Para configurar o ESLint e o Prettier em projetos Vue, é importante que você tenha muito claro qual o estilo de código que você deseja utilizar. Cada time pode ter um estilo diferente, mas é importante que todos os membros do time sigam o mesmo estilo.

Embora o ESLint e o Prettier sejam ferramentas diferentes, elas podem ser configuradas para trabalharem juntas. O ESLint é uma ferramenta que analisa o código e aponta erros e problemas, conhecido como _linting_ ou _linter_. O Prettier é uma ferramenta que formata o código, de acordo com um estilo pré-definido.

### Formatação com Prettier

Em linhas gerais, uma ferramenta de _linting_ verifica se o código está correto, enquanto uma ferramenta de formatação verifica se o código está de acordo com um estilo pré-definido, como:

* Tamanho da tabulação
* Utilização de aspas simples ou duplas
* Utilização de vírgula no final de cada linha
* Utilização de ponto e vírgula no final de cada linha
* E outros

Tais regras de formatação garantem que o código fique consistente, mesmo quando desenvolvido por diferentes desenvolvedores, talvez até em diferentes IDEs. Também evita que você tenha que tomar certas decisões de formatação (devo terminar minhas linhas com ponto e vírgula ou não?). Em vez disso, você simplesmente escreve o código da maneira que desejar e deixa o formatador reformatá-lo quando terminar.

Em projetos Vue, como na maioria dos projetos Javascript ou Typescript, o Prettier é utilizado em conjunto com o ESLint, e juntos eles formam um poderoso time para garantir que o código esteja de acordo com um estilo pré-definido.

Como o ESLint, o Prettier pode ser integrado com a maioria das IDEs, como Visual Studio Code, e pode ser configurado para formatar o código automaticamente quando você salvar o arquivo. Você pode configurar o Prettier para formatar o código de acordo com o estilo que desejar, e também pode configurar o ESLint para apontar problemas de acordo com o mesmo estilo.

Em geral, quando criamos um projeto no Vue, já é possível escolher para que o Prettier seja instalado e configurado. No entanto, é importante que você entenda como ele funciona e como ele pode ser configurado. Caso você não tenha escolhido a opção de instalar o Prettier, você pode instalar e configurar manualmente, com os seguintes comandos:

```bash
npm install --save-dev prettier
```

Em seguida, basta criar um arquivo `.prettierrc` na raiz do projeto, e adicionar as configurações que desejar. Por exemplo, se você deseja utilizar aspas simples, e não utilizar ponto e vírgula no final de cada linha, você pode adicionar o seguinte conteúdo no arquivo:

```json
{
  "singleQuote": true,
  "semi": false
}
```
Inicialmente, vamos manter esse arquivo vazio, e vamos configurar o ESLint para apontar problemas de acordo com o estilo que definirmos no Prettier. Dessa forma, o arquivo `.prettierrc` deve estar com o seguinte conteúdo:

```json
{}
```


### Linting com ESLint

Linting é uma forma de analisar o código e apontar problemas. O ESLint é uma ferramenta que faz isso, e pode ser configurado para apontar problemas de acordo com um estilo de código. Em geral, são definidas regras de estilo de código, e o ESLint aponta problemas de acordo com essas regras. Por exemplo, a ferramenta pode detectar e apontar a a ausência de vírgulas num código, ou mesmo avisar quando uma variável não está sendo utilizada.

É importante ressaltar que problemas de regras de negócio não são detectados pelo ESLint. Por exemplo, se você tiver uma função que faz uma divisão por zero, o ESLint não vai detectar isso. Ele vai apenas apontar problemas de sintaxe e de estilo de código.

Ainda, o ESLint não é apenas capaz de detectar erros no seu código, mas em muitos casos, pode até mesmo corrigi-los automaticamente. Ele pode ser executado como uma ferramenta de linha de comando e também está integrado na maioria dos IDEs comuns, como o Visual Studio Code, o que permite que os erros detectados pelo ESLint sejam revelados diretamente no arquivo que está sendo editado. 

Em geral, quando criamos um projeto no Vue, já é possível escolher para que o ESLint seja instalado e configurado. No entanto, é importante que você entenda como ele funciona e como ele pode ser configurado. 

Caso o seu projeto não tenha sido criado com o ESLint, você pode instalá-lo e configurá-lo manualmente. Para isso, execute o comando abaixo:

```bash
npm install --save-dev eslint eslint-plugin-vue
```

Após a instalação, basta criar um arquivo `.eslintrc.js` na raiz do projeto, e adicionar as configurações que desejar. Essas configurações são bem dinâmicas e podem ser alteradas conforme a necessidade. Por ora, vamos manter uma configuração básica indicada para a maioria dos projetos em Vue. Assim, o arquivo `.eslintrc.js` deve estar com o seguinte conteúdo:

```js
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: { }
}
``` -->




[&lt; Início](../ "Início") 
<!-- <span style="display: inline-block;width: 60%"></span>
[Exemplos de uso do Axios &gt;](exemplos-de-uso.html "Próximo")   -->