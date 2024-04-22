---
title: 'Integração com o Bootstrap'
permalink: /integracao-frameworks-css/integracao-bootstrap
---

# Integração com o Bootstrap

O Bootstrap é um framework CSS que facilita a criação de interfaces web responsivas. Ele é muito utilizado em projetos web e é um dos frameworks mais populares do mercado.

O VueJS possui uma integração com o Bootstrap que facilita a criação de interfaces web com o Bootstrap.

## Instalação

Para instalar o Bootstrap no projeto VueJS, basta executar o comando abaixo:

```bash
npm install bootstrap
npm install @popperjs/core
```

## Configuração

Para configurar o Bootstrap no projeto VueJS, basta adicionar o código abaixo no arquivo `main.js`:

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
```

## Uso

Para utilizar o Bootstrap no projeto VueJS, basta adicionar as classes CSS do Bootstrap nos elementos HTML.

Por exemplo, para criar um botão com o Bootstrap, basta adicionar a classe `btn` e a classe `btn-primary` no elemento `button`:

```html
<button class="btn btn-primary">Botão</button>
```

Esse código acima pode ser utilizado em qualquer componente VueJS, no bloco `template`.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](. 'Anterior')</span> <span>[Tutorial para formulário com Bootstrap &gt;](tutorial-bootstrap.html 'Próximo')</span></span>
