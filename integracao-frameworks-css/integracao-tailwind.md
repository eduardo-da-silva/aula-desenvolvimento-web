---
title: 'Integração com o Tailwind CSS'
permalink: /integracao-frameworks-css/integracao-tailwind
---

# Integração com o Tailwind CSS

O Tailwind CSS é um framework CSS utilitário que utiliza classes pré-definidas para estilizar rapidamente elementos HTML. Sua abordagem "utility-first" oferece flexibilidade e personalização, permitindo criar interfaces eficientes e consistentes. É adequado para projetos de grande escala, promovendo a reutilização de código.

## Instalação

Para instalar o TailwindCSS no projeto VueJS, basta executar o comando abaixo:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Agora, crie os arquivos de configuração do Tailwind CSS

```bash
npx tailwindcss init -p
```

## Configuração

No arquivo `tailwind.config.js`, adicione dentro dos colchetes de "content", o caminho de seus arquivos para o framework saber aonde ele deve procurar pelas classes, para poder aplica-las.

```js
'./index.html', './src/**/*.{vue,js,ts,jsx,tsx}';
```

Aqui, você especificou para ele procurar pelas suas classes no index.html, e em todos os arquivos que estiverem dentro da pasta src.

Agora, vá na pasta assets(que está dentro de src), apague todos os arquivos dentro dela, e crie um arquivo chamado `tailwind.css`

dentro do arquivo, inclua o seguinte código para importas as bibliotecas do Tailwind CSS.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

E então, na arquivo `main.js`, importe o arquivo criado.

```js
import './assets/tailwind.css';
```

Agora, o vue deve estar pronto para receber classes do Tailwind CSS.

## Uso

Para utilizar o Tailwind CSS no projeto VueJS, basta adicionar as classes CSS do Tailwind CSS nos elementos HTML.

```html
<button class="bg-black text-white">Botão</button>
```

Esse código acima pode ser utilizado em qualquer componente VueJS, no bloco `template`.

Sempre use a documentação do Tailwind CSS para utilizar bem o framework: tudo que você precisa está [aqui](https://tailwindcss.com/docs/utility-first)

É altamente recomendando você usar a extensão do VS Code da própria Tailwind, pois ela ira te auxiliar a usar o framework de forma dinâmica.

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

<span style="display: flex; justify-content: space-between;"><span>[&lt; Integração com Bootstrap](integracao-bootstrap.html 'Anterior')</span> <span>[Sumário &gt;](../ 'Próximo')</span></span>
