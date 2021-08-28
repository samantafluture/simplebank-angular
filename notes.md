# Angular

## Preparar ambiente

-   instalar a CLI `npm install -g @angular/cli`
-   criar o projeto `ng new my-first-project`
-   ir para a pasta do projeto `cd my-first-project`
-   rodar o projeto `ng serve`
-   acessar `http://localhost:4200/`

## Conceitos

-   decorator é um metadata que adiciona propriedades a uma classe
-   exemplo: @Component

-   todos os componentes com prefixo `app` no seletor

-   para ter funcionalidades de formulário, importar o `FormsModule` no `app.module.ts`

## Diretivas

-   exemplo `ngModel`
-   passar um valor do template html para a classe, por exemplo

### @Output

-   propagar informação para fora do componente
-   exemplo `@Output() aoTransferir = new EventEmitter();`

### @Input

-   recebe valor de outro componente
-   exemplo `@Input() transferencia: any;`

### ngFor

-   faz um `for`, uma iteração sobre elementos
-   exemplo para exibir os valores de uma transferência

```html
<tbody>
    <tr class="tabela__linha" *ngFor="let transferencia of transferencias">
        <td class="tabela__conteudo">
            {{ transferencia.data | date: "short" }}
        </td>
        <td class="tabela__conteudo">{{ transferencia.valor | currency }}</td>
        <td class="tabela__conteudo">{{ transferencia.destino }}</td>
    </tr>
</tbody>
```

### ngIf

- se comporta semelhante ao `if`


### {{}}

-   interpolação
-   quando der erro `undefined` na hora de interpoilar, pode ser porque a variável não foi inicializada
-   pode iniciliar colocando `= 0`, ou `!:` ou como o exemplo abaixo, usando `?`

```html
<p>Valor: {{ transferencia?.valor }}</p>
<p>Destino: {{ transferencia?.destino }}</p>
```

## Criar componentes

### De forma manual

1. criar os arquivos pertinentes ao componente, todos com o `nome-do-componente.component` e a extensão

-   pasta
    -   html
    -   scss
    -   ts

2. adicionar no `declarations` do `app.module.ts`

3. declarar a tag html (o selector) no `app.component.html`

### Pela CLI

`ng generate component nome-do-componente`

-   cria pastas e arquivos
-   declara componente no `app.module`

`ng s -o`

-   coloca o servidor no ar de volta

## Data Binding

-   data binding: realiza a comunicação de um componente com o DOM da aplicação

### Event Binding

-   event binding: permite que um evento do DOM seja atribuído a um método
-   é o binding de um evento para uma propriedade interna do angular
-   exemplo: usar o `(ngSubmit)=metodo()` no `<form>`

### Property Binding

-   permite que um valor de uma variável seja atribuído ao elemento HTML
-   exemplo: é possível associar uma propriedade de um elemento a um atributo de uma classe
-   `()`

### Two-way data binding

-   garante uma comunicação bidirecional entre o componente e o DOM
-   comunicação de duas vias entre uma propriedade de um elemento a um atributo de uma classe
-   `[()]`
-   para passar/acessar uma variável, é importante passar colchetes e parênteses: `[(ngModel)]=""`
