# Notas de JavaScript — Sessão de Estudo

Resumo de todos os exercícios e conceitos abordados nesta conversa.

---

## 1. Comparação de tipos com `typeof`

Exercício: função que recebe dois números e diz se o primeiro é maior ou igual ao segundo, diferenciando números de strings.

```javascript
function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) {
        return false
    } else if (num1 >= num2) {
        return true
    } else {
        return false
    }
}
```

**Conceitos-chave:**
- `typeof valor` devolve uma string com o tipo (`"number"`, `"string"`, `"boolean"`, etc.)
- **Erro comum:** deixar uma cadeia `if/else if` sem cobrir todos os casos. Se nenhuma condição corresponder e não houver `return`, a função devolve `undefined` silenciosamente.
- Regra de ouro: perguntar sempre "existe algum cenário que não está coberto?"

---

## 2. Verificar se um parâmetro é booleano

```javascript
if (typeof param === "boolean") {
  // é booleano
}
```

**Cuidado:** `if (param)` testa se o valor é *truthy/falsy*, não se é do tipo booleano. `0`, `""`, `null`, `undefined` e `false` são todos falsy, mas só `false`/`true` são realmente do tipo `"boolean"`.

---

## 3. Inverter o sinal de um número

```javascript
function inverso(num) {
  return -num
}
```

O `-` à frente de um número inverte o sinal (`-1` vira `1`, `5` vira `-5`).

---

## 4. `return` corta a execução imediatamente

Erro comum e recorrente ao longo da sessão: qualquer código escrito **depois** de um `return` nunca é executado (código morto).

Exemplo do erro:
```javascript
function inverso(valor) {
    if (typeof valor === "boolean" && valor === true) {
        return !true
    } else {
        return true   // isto captura TODOS os outros casos, incluindo números!
    }

    // nunca chega aqui:
    if (typeof valor === "number") {
        return -valor
    }
}
```

**Solução:** remover o `else` genérico do primeiro bloco, para que a execução "caia" naturalmente para o próximo `if` quando necessário:
```javascript
function inverso(valor) {
    if (typeof valor === "boolean" && valor === true) {
        return !true
    } else if (typeof valor === "boolean" && valor === false) {
        return !false
    }
    if (typeof valor === "number") {
        return -valor
    } else {
        return "boolean or numbers expected"
    }
}
```

---

## 5. OU inclusivo vs. OU exclusivo (lógica booleana)

- **OU inclusivo (`||`):** verdadeiro se pelo menos uma condição for verdadeira — **incluindo** quando ambas são verdadeiras.
- **OU exclusivo (XOR):** verdadeiro se **exatamente uma** condição for verdadeira, não as duas ao mesmo tempo. JS não tem operador lógico dedicado para isto entre booleanos; simula-se com `a !== b`.

---

## 6. Parâmetros booleanos e valores por defeito

```javascript
function minhaFuncao(ativo = true) {
  // se chamada sem argumento, ativo = true
}
```

Um parâmetro booleano funciona como qualquer outro — não há sintaxe especial para "forçar" o tipo. JavaScript não tem tipos fixos nos parâmetros; um parâmetro é só um nome que recebe o que for passado na chamada.

---

## 7. Exercício `estaEntre` (número entre mínimo e máximo, com inclusividade)

**Enunciado:** função que recebe `numero`, `minimo`, `maximo` e um booleano `inclusivo` (default `false`), e diz se `numero` está entre `minimo` e `maximo`. Se `inclusivo` for `true`, as bordas contam; se `false`, não contam.

**Solução construída passo a passo:**
```javascript
function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (numero > minimo && numero < maximo) {
        return true
    }
    if (numero === minimo || numero === maximo) {
        return inclusivo
    }
    return false
}
```

**Solução "oficial" do curso (nota: ordem dos parâmetros diferente!):**
```javascript
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}
```
ou, com ternário:
```javascript
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
```

**Nota importante:** houve uma inconsistência entre o enunciado escrito (que dizia a ordem `numero, minimo, maximo`) e a ordem realmente usada na solução/exemplos (`minimo, maximo, numero`). Vale sempre confirmar a ordem dos parâmetros através dos exemplos testados, não só do texto.

**Ideia central de design:** em vez de tratar "está na borda" como um caso à parte, escolhe-se qual operador usar (`>=`/`<=` vs `>`/`<`) consoante o valor de `inclusivo`. Como a expressão `numero >= minimo && numero <= maximo` já é um booleano, pode fazer-se `return` diretamente dela, sem precisar de `if/else` a devolver `true`/`false` manualmente.

---

## 8. Multiplicação sem o operador `*`

**Ideia:** multiplicação é soma repetida. `4 x 3` é o mesmo que somar `4` três vezes.

```javascript
function multiplicar(numero1, numero2) {
    let resultado = 0

    for (let i = 0; i < numero2; i++) {
        resultado += numero1
    }

    return resultado
}
```

**Erro comum:** declarar o acumulador com `const` em vez de `let` — `const` não permite reatribuição, e o acumulador precisa de mudar a cada iteração do loop.

---

## 9. Repetir um elemento N vezes num array

```javascript
function repetir(param1, param2) {
    let arr = []

    for (let i = 0; i < param2; i++) {
        arr.push(param1)
    }

    return arr
}
```

**Erro comum:** usar `arr += param1` em vez de `arr.push(param1)`. O `+=` com um array não adiciona elementos — força a conversão do array para string (arrays convertidos para string juntam os elementos com vírgulas), resultando numa string em vez de um array.

---

## 10. Comportamento dos operadores `+` e `-` com tipos diferentes (coerção de tipo)

- **`+`**: se pelo menos um dos lados for string (ou algo convertível para string, como array), o resultado é **concatenação de texto**. Só soma matematicamente se os dois lados forem números.
  - `2 + 3` → `5`
  - `"2" + 3` → `"23"`
  - `[] + 7` → `"7"`
- **`-`, `*`, `/`**: não têm ambiguidade de significado (só fazem matemática), por isso tentam sempre **converter os dois lados para número**.
  - `"5" - 2` → `3`
  - `[5] - 2` → `3`
  - `"abc" - 2` → `NaN`

---

## 11. String repetida de um símbolo

```javascript
function simboloMais(number) {
    let input = ""

    for (let i = 0; i < number; i++) {
        input += "+"
    }

    return input
}
```

Aqui o `+=` funciona corretamente porque estamos a concatenar strings (diferente do caso do array, onde era preciso `.push()`).

---

## 12. Índices de array — primeiro e último elemento

```javascript
function receiveFirstAndLastElement(arr = []) {
    let newArr = [arr[0], arr[arr.length - 1]]
    return newArr
}
```

**Conceitos-chave:**
- Arrays são indexados a partir de `0`. Um array com `length` igual a `3` tem índices válidos `0`, `1`, `2`.
- O índice do último elemento é sempre `length - 1`, nunca `length` (senão dá `undefined`, porque essa posição não existe).
- `arr.length - 1` calcula o **índice** (um número); só com os colchetes `arr[...]` é que se vai efetivamente **buscar o valor** guardado nessa posição.

---

## 13. Aceder a propriedades de objeto com nome dinâmico

Quando o nome da propriedade vem de uma variável/parâmetro (string), não se pode usar a notação de ponto (`objeto.propriedade`), porque o JS interpretaria isso como o nome literal `"propriedade"`.

**Solução:** notação de colchetes, que aceita uma variável lá dentro:
```javascript
function getProp(objeto, propriedade) {
    return objeto[propriedade]
}
```

---

## 14. Referências de memória em objetos

```javascript
let obj1 = { a: 1 }
let obj2 = obj1
obj2.a = 999
console.log(obj1.a) // 999 — porque obj1 e obj2 apontam para o MESMO objeto na memória
```

Um parâmetro de função que recebe um objeto não é uma cópia automática — é só outro nome a apontar para o mesmo objeto. Modificar o objeto recebido como parâmetro também modifica o objeto original fora da função (efeito colateral indesejado).

---

## 15. Exercício `removerPropriedade` (cópia de objeto sem uma propriedade)

**Enunciado:** função que recebe um objeto e o nome de uma propriedade, e devolve uma **cópia** desse objeto sem essa propriedade (sem alterar o objeto original).

```javascript
function removerPropriedade(objeto, parametro) {
    let objectCopy = { ...objeto }
    delete objectCopy[parametro]

    return objectCopy
}
```

**Conceitos-chave:**
- `{ ...objeto }` (spread) copia todas as **propriedades** do objeto original para um objeto **novo**, numa posição de memória diferente — isto evita que a cópia fique a referenciar o mesmo objeto original.
- `delete objeto[propriedade]` remove uma propriedade de um objeto. Deve usar-se sempre na **cópia**, nunca no objeto original recebido como parâmetro — senão o objeto original (e qualquer variável fora da função que aponte para ele) também seria alterado.
- `Object.is(copia, original)` pode usar-se para confirmar que a cópia é um objeto diferente na memória (deve devolver `false`).

---

## 16. `let objectCopy = objeto` (sem spread) — por que é um bug perigoso

Continuação do exercício `removerPropriedade`: o que acontece se se copiar o objeto **sem** usar spread?

```javascript
function removerPropriedade(objeto, parametro) {
    let objectCopy = objeto   // NÃO copia — só cria outro nome para o MESMO objeto
    delete objectCopy[parametro]
    return objectCopy
}
```

**O que realmente acontece:** `objectCopy` e `objeto` passam a apontar para a **mesma posição de memória** (mesma "caixa"), tal como no exemplo `obj1`/`obj2` da secção 14. Não existem dois objetos — só a ilusão de dois, através de dois nomes diferentes.

Quando se faz `delete objectCopy[parametro]`, está-se a apagar a propriedade dessa única caixa partilhada. Como `objeto` (o argumento original recebido pela função) aponta para a mesma caixa, a propriedade também desaparece dele — mesmo fora da função, mesmo que quem chamou a função nunca tenha pedido para alterar o original.

**Por que "parece funcionar" mas está errado:** o `return objectCopy` mostra o resultado certo (o objeto sem a propriedade), por isso é fácil pensar que a função está correta. O bug só se manifesta se, depois de chamar a função, alguém verificar o objeto original e reparar que também perdeu a propriedade — um efeito colateral escondido.

**Exemplo prático do risco:** imaginar uma função que gera uma "versão pública" de um produto sem o campo `custoInterno` (só a equipa interna deveria ver esse campo). Sem o spread, ao gerar a versão pública, o campo `custoInterno` desaparece também do objeto original/interno — perdendo essa informação para sempre em toda a aplicação, não só na versão pública.

**Regra geral:** sempre que uma função recebe um objeto e precisa de o modificar (remover/alterar/adicionar propriedades):
1. Perguntar: a função deve alterar o objeto original, ou devolver uma versão nova? Se o enunciado pede "cópia" ou "sem alterar o original", é sinal de que é preciso copiar de verdade.
2. `let x = objeto` **não** copia o conteúdo — só copia a referência (o "endereço" na memória). É preciso `{ ...objeto }` para criar um objeto novo, numa posição de memória diferente.

---

## 17. Exercício `filtrarNumeros` — filtrar elementos de um array por tipo

**Enunciado:** função que recebe um array de elementos e devolve um array só com os números presentes nesse array.
```javascript
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // [1, 20]
filtrarNumeros(["a", "c"]) // []
```

**Processo de construção (passo a passo):**

1. A função recebe **um único parâmetro** — o array de entrada (ex: `arr`). Não precisa de mais parâmetros.
2. Criar uma variável **nova e vazia** para guardar o resultado — não reaproveitar o array recebido nem inicializá-la com `[...arr]` (isso copiava tudo, incluindo os elementos que não são números).
3. Usar um `for` a percorrer o array **recebido** (`i < arr.length`), não o array de resultado (que começa vazio e teria sempre `length` 0 — loop que nunca corre).
4. Dentro do loop, `arr[i]` dá acesso ao **valor** guardado na posição `i` (não confundir com `i`, que é só o índice/número da posição).
5. Testar `typeof arr[i] === "number"` para saber se o elemento atual é um número (nota: `typeof "number"` está errado — isso testa o tipo da string literal `"number"`, que é sempre `"string"`; o que interessa é aplicar `typeof` ao elemento, não à palavra "number").
6. Se for número, `array.push(arr[i])` — adicionar o **valor**, não o índice `i`.
7. O `return array` deve ficar **fora** do `for` (depois do `}` que fecha o loop) — senão a função sai logo na primeira iteração, sem processar o resto do array.

**Solução final:**
```javascript
function filtrarNumeros(arr) {
    let array = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number")
            array.push(arr[i])
    }
    return array;
}
```

**Nota sobre `"3"` vs `3`:** uma string que "parece" um número (`"3"`, entre aspas) tem `typeof` igual a `"string"`, não `"number"` — por isso não entra no array de resultado. É uma pegadinha comum para testar se se percebeu bem a diferença entre tipos.

**Conexão com métodos de array:** todo este padrão (array vazio + `for` + `if` + `push`) é exatamente o que o método `.filter()` faz internamente. `.filter()` recebe uma função de callback que devolve `true`/`false` para cada elemento, e constrói automaticamente um array novo só com os elementos para os quais a callback devolveu `true`:
```javascript
function filtrarNumeros(arr) {
    return arr.filter(elemento => typeof elemento === "number")
}
```
Ainda por explorar em detalhe: reescrever este exercício com `.filter()` e comparar lado a lado com a versão de `for`.

---

## 18. Exercício `objetoParaArray` — de objeto para array de pares [chave, valor] (EM PAUSA)

**Enunciado:** função que recebe um objeto e devolve um array de arrays, em que cada elemento é o par `[chave, valor]` de um atributo do objeto.
```javascript
objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" })
// [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
```

**Por que o `for` normal não serve diretamente:** o `for` conhecido (`for (let i = 0; i < arr.length; i++)`) depende de um array ter `.length` e índices numéricos (`arr[0]`, `arr[1]`...). Um objeto não tem `.length` nem índices numéricos — as suas "posições" são as próprias chaves (strings).

**`Object.keys(objeto)`:** método que devolve um **array** só com os nomes das propriedades (chaves) de um objeto, como strings:
```javascript
Object.keys({ nome: "Maria", profissao: "Desenvolvedora" })
// ["nome", "profissao"]
```
Como isto já é um array normal (com `.length` e índices), pode ser percorrido com o `for` já conhecido.

**Erro comum:** esquecer de guardar o resultado de `Object.keys(obj)` numa variável — chamar a função sozinha, numa linha, sem `let algo = ...`, descarta o array devolvido.

**Ir buscar o valor a partir da chave:** com `keys[i]` (a chave na posição `i`, uma string), usa-se a notação de colchetes já vista na secção 13 para aceder ao valor: `obj[keys[i]]`. Importante não confundir `obj[i]` (tentaria aceder a uma posição numérica, que o objeto não tem) com `obj[keys[i]]` (acede à propriedade cujo **nome** está guardado dentro de `keys[i]`).

**Solução oficial (usa `.map()`, ainda a consolidar):**
```javascript
function objetoParaArray(obj) {
   const chaves = Object.keys(obj)
   const resultado = chaves.map(chave => [chave, obj[chave]])
   return resultado
}
```

**`.map()` — o que faz:** parecido com `.filter()` (secção 17), percorre um array elemento a elemento, mas em vez de decidir manter/descartar cada elemento, **transforma** cada um numa coisa nova, construindo um array novo com o mesmo número de elementos. Aqui, cada `chave` (string, ex: `"nome"`) é transformada no par `[chave, obj[chave]]`.

**Ponto de confusão identificado (por resolver):** distinguir a variável `chave` (que a cada iteração contém uma string, ex: `"nome"`) de `obj[chave]` (que usa o *conteúdo* dessa variável para ir buscar o valor correspondente em `obj` — equivalente a `obj["nome"]` nessa iteração). `chave` **não é um array**, é uma string isolada a cada chamada — por isso não faz sentido escrever `chave[algumaCoisa]`.

**Arrow function com return implícito:** `chave => [chave, obj[chave]]` é a forma curta de `function(chave) { return [chave, obj[chave]] }`. Quando o corpo de uma arrow function não tem chavetas `{}`, o resultado da expressão é devolvido automaticamente, sem precisar de escrever `return`.

*Nota: este exercício ficou em pausa a meio da explicação de `.map()` — retomar depois, se possível começando só por `obj[chave]` isolado, sem `.map()` à volta, para consolidar essa peça primeiro antes de voltar a juntar tudo.*

---

## 19. Exercício `receberParesDeIndicesPares` — operador módulo (`%`) e duas condições combinadas

**Enunciado:** função que recebe um array de números e devolve um array só com os números que são **pares** e que estão em **índices pares**.
```javascript
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // [10, 22]
```

**O que é o resto de uma divisão (intuição sem "matemática"):** pensar em dividir bolachas por pessoas.
- 10 bolachas por 2 pessoas → 5 cada, não sobra nada → resto **0** → 10 é **par**
- 7 bolachas por 2 pessoas → 3 cada, sobra 1 → resto **1** → 7 é **ímpar**

**Operador `%` (módulo):** calcula esse resto em JavaScript.
```javascript
10 % 2   // 0 (não sobrou nada)
7 % 2    // 1 (sobrou 1)
```

**Testar se um número é par:** comparar o resto com `0` usando `===`:
```javascript
n % 2 === 0   // true se n for par
```
Erro comum: escrever `i % 0` em vez de `i % 2` — o número pelo qual se testa par/ímpar é sempre `2` (dividir por 0 não faz sentido e dá `NaN`); e esquecer o `=== 0`, que é o que transforma o resto (`0` ou `1`) numa condição `true`/`false` de facto.

**Combinar duas condições com `&&`:** o exercício pede que **ambas** as condições sejam verdadeiras ao mesmo tempo (índice par **e** valor par) — usa-se o operador `&&` (E lógico) para juntar as duas expressões:
```javascript
i % 2 === 0 && arr[i] % 2 === 0
```

**Solução final (com a condição extraída para uma variável nomeada, para maior legibilidade):**
```javascript
function receberParesDeIndicesPares(arr) {
    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        const numeroEIndicePar = i % 2 === 0 && arr[i] % 2 === 0

        if (numeroEIndicePar) {
            resultado.push(arr[i])
        }
    }
    return resultado
}
```

**Erro comum (igual ao do `filtrarNumeros`):** fazer `resultado.push(i)` em vez de `resultado.push(arr[i])` — o nome da função ("índices pares") pode sugerir que se guardam índices, mas o que entra no array final são sempre os **valores**, não as posições; o índice serve só como parte da condição para escolher o elemento.

**Nota tranquilizadora:** exercícios com `%` e "par/ímpar" são uma fase inicial de cursos de programação, feita para treinar lógica com algo fácil de testar — não representam o dia a dia típico de frontend (que lida muito mais com organizar dados, estados, componentes e chamadas a APIs do que com cálculos matemáticos).

---

## Erros recorrentes identificados ao longo da sessão

1. **`return` mal posicionado** — corta a execução da função, tornando código posterior inalcançável ("código morto"). Aconteceu nos exercícios `inverso`, `receiveFirstAndLastElement`, `removerPropriedade` e `filtrarNumeros` (return dentro do `for`).
2. **`if/else` que não cobre todos os casos** — leva a `undefined` silencioso.
3. **Confundir `+=`/`+` em arrays vs. strings** — `+=` funciona bem em strings e números (concatenação/soma), mas não em arrays (usar `.push()`).
4. **Confundir atribuição (`=`) com comparação (`===`)**.
5. **Confundir ordem dos parâmetros** entre o enunciado e os exemplos testados — sempre verificar contra os exemplos dados.
6. **Copiar objetos sem spread (`let x = objeto` em vez de `{ ...objeto }`)** — não cria uma cópia real, só outro nome para o mesmo objeto na memória; qualquer alteração (ex: `delete`) afeta também o objeto original, um efeito colateral perigoso e silencioso.
7. **Confundir índice (`i`) com valor (`arr[i]`)** — `i` é só a posição; `arr[i]` é o conteúdo guardado nessa posição. Aconteceu em `filtrarNumeros` (`array.push(i)` em vez de `array.push(arr[i])`) e em `receberParesDeIndicesPares` (mesmo erro).
8. **`typeof` aplicado à palavra errada** — `typeof "number"` testa o tipo da string literal `"number"` (sempre `"string"`), não o tipo do elemento que se quer verificar. O correto é `typeof elemento === "number"`.
9. **Loop com condição baseada no array errado** — usar `i < arrayVazio.length` (que é sempre `0`) em vez de `i < arrayOriginal.length`, fazendo o loop nunca correr.
10. **Testar par/ímpar com o número errado** — `i % 0` em vez de `i % 2` (dividir por 0 não faz sentido); esquecer o `=== 0` que transforma o resto numa condição verdadeira/falsa.
11. **Confundir uma variável de iteração (string isolada, ex: `chave` num `.map()`) com um array** — tentar escrever `chave[algumaCoisa]` quando `chave` já é o próprio valor individual (ex: `"nome"`), não uma coleção a indexar.
