---
title: 'Propriedades computadas'
permalink: /reatividade/propriedades-computadas
---

# Propriedades computadas

As propriedades computadas são funções que são executadas automaticamente sempre que uma de suas dependências é alterada. Elas são declaradas usando a função `computed` do VueJS. Veja o exemplo abaixo:

```html
<script setup>
  import { reactive, computed } from 'vue';

  const professor = reactive({
    nome: 'Eduardo da Silva',
    disciplinas: [
      'Desenvolvimento Web II',
      'Desenvolvimento de Aplicativos para Dispositivos Móveis',
    ],
  });

  const possuiDisciplinas = computed(() => {
    return professor.disciplinas.length > 0 ? 'Sim' : 'Não';
  });
</script>

<template>
  <div>
    <h1>Professor</h1>
    <p>Nome: {% raw %}{{ professor.nome }}{% endraw %}</p>
    <p>Possui disciplinas: {% raw %}{{ possuiDisciplinas }}{% endraw %}</p>
  </div>
</template>
```

Neste exemplo, alguns pontos importantes precisam ser destacados:

- a propriedade computada `possuiDisciplinas` é declarada usando a função `computed` do componente VueJS.
- a função `computed` recebe como parâmetro uma função que retorna o valor da propriedade computada.
- `possuiDisciplinas` depende da propriedade `disciplinas` do objeto `professor`.
- portanto, a propriedade computada `possuiDisciplinas` é executada automaticamente sempre que a propriedade `disciplinas` do objeto `professor` for alterada. Note que `professor` é um dado reativo, como visto anteriormente;

Ainda, o resultado da propriedade computada `possuiDisciplinas` é exibido na interface do usuário. Note que o valor da propriedade computada `possuiDisciplinas` é exibido na interface do usuário sempre que a propriedade `disciplinas` do objeto `professor` for alterada. Neste exemplo, o resultado será:

```html
<h1>Professor</h1>
<p>Nome: Eduardo da Silva</p>
<p>Possui disciplinas: Sim</p>
```

Note que se a propriedade `disciplinas` do objeto `professor` for alterada para um array vazio, o resultado da propriedade computada `possuiDisciplinas` será alterado automaticamente para `Não`, como o exemplo abaixo.

```html
<h1>Professor</h1>
<p>Nome: Eduardo da Silva</p>
<p>Possui disciplinas: Não</p>
```

## Por que usar propriedades computadas e não métodos?

A principal diferença entre propriedades computadas e métodos é que as propriedades computadas são executadas automaticamente sempre que uma de suas dependências é alterada. Já os métodos são executados quando são chamados. Veja o exemplo abaixo, muito similar ao exemplo anterior.

```html
<script setup>
  import { ref } from 'vue';

  const professor = ref({
    nome: 'Eduardo da Silva',
    disciplinas: [
      'Desenvolvimento Web II',
      'Desenvolvimento de Aplicativos para Dispositivos Móveis',
    ],
  });

  function possuiDisciplinas() {
    return professor.value.disciplinas.length > 0 ? 'Sim' : 'Não';
  }
</script>

<template>
  <div>
    <h1>Professor</h1>
    <p>Nome: {% raw %}{{ professor.nome }}{% endraw %}</p>
    <p>Possui disciplinas: {% raw %}{{ possuiDisciplinas() }}{% endraw %}</p>
  </div>
</template>
```

Neste exemplo, a propriedade computada `possuiDisciplinas` foi substituída por um método. O resultado ao executar o exemplo é o mesmo do exemplo anterior. Contudo, o resultado de um propriedade computada é mantido em cache, enquanto o resultado de um método é sempre recalculado. Em outras palavras, o resultado de uma propriedade computada é recalculado apenas quando uma de suas dependências é alterada. Já o resultado de um método é recalculado sempre que o método é chamado, o que no exemplo anterior acontecerá sempre que acontecer uma re-renderização da interface do usuário.

Mas porque isso é importante? Imagine que você tenham uma outra propriedade com um Array armazenado, não referente às disciplinas, mas aos `projetos` de um professor. Nesse caso, o resultado do método `possuiDisciplinas` será recalculado sempre que a interface do usuário for re-renderizada, por exemplo, ao adicionar um novo `projeto` mesmo que a propriedade `disciplinas` do objeto `professor` não tenha sido alterada. Isso pode causar um impacto negativo no desempenho da aplicação, pois o método `possuiDisciplinas` pode ser executado inúmeras vezes sem necessidade.

<span style="display: flex; justify-content: space-between;"><span>[&lt; Variáveis reativas](variaveis-reativas 'Anterior')</span> <span>[Exercícios &gt;](exercicios.html 'Próximo')</span></span>
