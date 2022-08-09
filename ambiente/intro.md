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

Para instalar ou atualizaro o `nvm`, execute o comando abaixo:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Após a instalação, é necessário atualizar as variáveis de ambiente do seu terminal. Para tal, sugiro fechar o terminal e abrir novamente. Em seguida, você pode instalar a versão LTS do NodeJS:

```bash
nvm install --lts
```

[&lt; Início](../ "Início") 
<!-- <span style="display: inline-block;width: 60%"></span>
[Exemplos de uso do Axios &gt;](exemplos-de-uso.html "Próximo")   -->