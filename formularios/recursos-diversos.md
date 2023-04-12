---
title: "Recursos Diversos"
permalink: /formularios/recursos-diversos
---

# Recursos Diversos

Essa seção apresenta alguns recursos adicionais que podem ser usados em campos de formulários.

## Placeholder

O atributo `placeholder` define um texto de ajuda que é exibido dentro do campo de texto:

```html
<input type="text" v-model="nome" placeholder="Digite seu nome" />
```

## Autocomplete

O atributo `autocomplete` define que o campo de texto pode ser preenchido automaticamente pelo navegador:

```html
<input type="text" v-model="nome" autocomplete="on" />
```

## Readonly

O atributo `readonly` define que o campo é somente leitura:

```html
<input type="text" v-model="nome" readonly />
```

## Disabled

O atributo `disabled` define que o campo está desabilitado:

```html
<input type="text" v-model="nome" disabled />
```

## Atributos globais

Além dos atributos específicos de campos, é possível usar qualquer atributo HTML em um campo de texto:

```html
<input type="text" v-model="nome" class="form-control" />
```

## Atributos de estilo

Além dos atributos específicos de campos, é possível usar qualquer atributo de estilo em um campo de texto:

```html
<input type="text" v-model="nome" style="width: 200px" />
```

## Campo obrigatório

Para marcar um campo como obrigatório, basta usar o atributo `required`:

```html
<input type="text" v-model="nome" required />
```

# Modificadores

É possível usar modificadores para alterar o comportamento de campos de texto. 

## Modificador trim

O modificador `trim` remove espaços em branco no início e no fim do texto:

```html
<input type="text" v-model.trim="nome" />
```

## Modificador lazy

O modificador `lazy` faz com que o valor do campo seja atualizado somente quando o campo perde o foco:

```html
<input type="text" v-model.lazy="nome" />
```

## Modificador number

O modificador `number` converte o valor do campo para um número:

```html
<input type="text" v-model.number="idade" />
```

## Modificador lazy.number

É possível combinar vários modificadores:

```html
<input type="text" v-model.lazy.number="idade" />
```

## Modificador trim.lazy.number

É possível combinar vários modificadores:

```html
<input type="text" v-model.trim.lazy.number="idade" />
```


<span style="display: flex; justify-content: space-between;"><span>[&lt; Início](uso-basico.html "Anterior")</span> <span>[Upload de imagens &gt;](upload-imagens.html "Próximo")</span></span>