# Angular

## Preparar ambiente

- instalar a CLI `npm install -g @angular/cli`
- criar o projeto `ng new my-first-project`
- ir para a pasta do projeto `cd my-first-project`
- rodar o projeto `ng serve`
- acessar `http://localhost:4200/`

## Conceitos

- decorator é um metadata que adiciona propriedades a uma classe
- exemplo: @Component

- todos os componentes com prefixo `app` no seletor

## Criar componentes de forma manual

1. criar os arquivos pertinentes ao componente, todos com o `nome-do-componente.component` e a extensão

- pasta
    - html
    - scss
    - ts

2. adicionar no `declarations` do `app.module.ts`

3. declarar a tag html (o selector) no `app.component.html`


