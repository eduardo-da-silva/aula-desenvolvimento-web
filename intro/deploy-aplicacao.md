---
title: "Deploy da aplicação"
permalink: /intro/deploy-aplicacao
---

# Deploy da aplicação

Durante o desenvolvimento, a aplicação é executada localmente, no computador do desenvolvedor. Para que a aplicação possa ser acessada por outros usuários, ela precisa ser publicada em um servidor.

Duas etapas são necessárias para publicar uma aplicação VueJs:

* Compilação da aplicação
* Publicação da aplicação

## Compilação da aplicação

A compilação da aplicação é feita pelo comando:
```bash
npm run build
```
Esse comando gera uma pasta `dist` com os arquivos estáticos da aplicação. Esses arquivos são os que serão publicados no servidor.

Os arquivos gerados na pasta `dist` são os mesmos que são gerados pelo comando `npm run serve`. A diferença é que, ao executar o comando `npm run serve`, os arquivos são servidos pelo servidor de desenvolvimento, que é executado localmente. Já ao executar o comando `npm run build`, os arquivos são gerados para serem servidos por um servidor web.

Além disso, esses arquivos são otimizados para serem servidos em produção. Por exemplo, os arquivos CSS e JS são minificados, e os arquivos de imagem são otimizados.

## Publicação da aplicação

A publicação da aplicação é feita copiando os arquivos da pasta `dist` para o servidor web. Essa etapa pode ser feita de diversas formas, dependendo do servidor web utilizado. Por exemplo, você pode instalar um servidor Web usando o Ngix ou o Apache, ou você pode utilizar um serviço de hospedagem de sites.

Neste curso, vamos utilizar o serviço de hospedagem de sites [Surge](https://surge.sh/). O Surge é um serviço de hospedagem de sites estáticos, que permite a publicação de sites gratuitamente. Para utilizar o Surge, é necessário ter uma aplicação de linha de comando instalada. Essa aplicação é o [Surge](https://surge.sh/), que pode ser instalado com o comando:

```bash
npm install -g surge
```

Ao executar o comando `surge`, o Surge solicita o e-mail e a senha do usuário. Esses dados são utilizados para autenticar o usuário no serviço. Caso o usuário não possua uma conta no Surge, o comando criará uma conta para o usuário, com os dados informados.

Após a autenticação, o Surge solicita o caminho da pasta que será publicada. Neste caso, o caminho é `dist`. O Surge então publica a aplicação, e exibe a URL onde a aplicação foi publicada.

Para publicar a aplicação, execute o comando, de preferência dentro da pasta `dist`:

```bash
surge
```

Algumas dicas importantes:
* Caso algum usuário já esteja autenticado no Surge, o comando `surge` publicará a aplicação para o usuário autenticado. Para publicar a aplicação para outro usuário, é necessário *deslogar* do Surge, utilizando o comando `surge logout`.
* O usuário correto pode ser verificado executando o comando `surge whoami`. Caso o comando retorne um e-mail, significa que o usuário está autenticado. Caso o comando retorne `Not logged in`, significa que o usuário não está autenticado.
* Sempre que novas alterações forem feitas na aplicação, é necessário executar o comando `npm run build` para gerar os arquivos estáticos, e então executar o comando `surge` para publicar a aplicação.


<span style="display: flex; justify-content: space-between;"><span>[&lt; Componentes de arquivo único](single-file-components.html "Voltar")</span> <span>[Sumário &gt;](../ "Próximo")</span></span>