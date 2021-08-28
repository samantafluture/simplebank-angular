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

- para ter funcionalidades de formulário, importar o `FormsModule` no `app.module.ts`

## Criar componentes de forma manual

1. criar os arquivos pertinentes ao componente, todos com o `nome-do-componente.component` e a extensão

- pasta
    - html
    - scss
    - ts

2. adicionar no `declarations` do `app.module.ts`

3. declarar a tag html (o selector) no `app.component.html`

## Event Binding

- data binding: realiza a comunicação de um componente com o DOM da aplicação
- event binding: permite que um evento do DOM seja atribuído a um método
- é o binding de um evento para uma propriedade interna do angular
- exemplo: usar o `(ngSubmit)=metodo()` no `<form>`

## Property Binding

- permite que um valor de uma variável seja atribuído ao elemento HTML
- exemplo: é possível associar uma propriedade de um elemento a um atributo de uma classe
- `()`

### Diretiva

- exemplo `ngModel`
- passar um valor do template html para a classe, por exemplo

## Two-way data binding

- garante uma comunicação bidirecional entre o componente e o DOM
- comunicação de duas vias entre uma propriedade de um elemento a um atributo de uma classe
- `[()]`
- para passar/acessar uma variável, é importante passar colchetes e parênteses: `[(ngModel)]=""`



