# 5 features do ES6

*Leitura de 2 minutos.*

Isso é uma lista de 5 das minhas features favoritas do ECMAScript 6 (ou ES6).

São pequenos "pedaços" de código que eu considero simples porém super incríveis e úteis.

Você pode ver os códigos fonte nesse repositório, testar no copen e compartilhar as imagens (SVG e PNG) dos códigos se quiserem. É tudo free, não tem direito autoral e esse repo tá na licensa MIT.

Dica: Quando vir os exemplos no codepen, lembre de abrir a aba de console pra ver os resultados ;).

Sem mais delongas aqui vai o número #1.

### #1 Arrays com valores únicos

![Arrays com valores únicos](/img/unique-array.png?raw=true)

[Código](/features/unique-array.js) | [Codepen](https://codepen.io/emersonmdca/pen/KErYZg)

Fazer um array ter valores únicos é algo muito útil que antes requeria fazer loops usando `for`, `forEach` ou qualquer outra maneira que requer várias linhas de código agora está muito simples com ES6.

Nesse exemplo temos `numbersArray` com o valor `1` e `2` repetidos. Convertendo ele em tipo `Set` faz com que os valores repetidos sejam automáticamente deletados. Depois disso temos que convertelos de volta pra array usando `Array.from()`.

Feito isso você tem um belo array sem nenhum valor repetido usando as magias do `Set()`.

E se você é desses que gosta de escrever tudo em uma linha pra impressionar, você pode combinar os dois:

`Array.from(new Set([1, 2, 2, 1, 1]))` :eyes:

[Leia mais sobre Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)

### #2 Clonando objetos com Spread Operator

![Clonando objetos com Spread Operator](/img/object-clone.png?raw=true)

[Código](/features/object-clone.js) | [Codepen](https://codepen.io/emersonmdca/pen/moQgmo)

[Leia mais sobre Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### #3 Usando Template String e acessando objetos com Destructuring

![Arrays com valores únicos](/img/template-string-with-destructuring.png?raw=true)

[Código](/features/template-string-and-destructuring.js) | [Codepen](https://codepen.io/emersonmdca/pen/drQLVg)

[Leia mais sobre Atribuicao via desestruturacao](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

[Leia mais sobre Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)

## Licence

This code is released under the MIT License (MIT)
