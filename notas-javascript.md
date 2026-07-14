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

## Erros recorrentes identificados ao longo da sessão

1. **`return` mal posicionado** — corta a execução da função, tornando código posterior inalcançável ("código morto"). Aconteceu nos exercícios `inverso`, `receiveFirstAndLastElement` e `removerPropriedade`.
2. **`if/else` que não cobre todos os casos** — leva a `undefined` silencioso.
3. **Confundir `+=`/`+` em arrays vs. strings** — `+=` funciona bem em strings e números (concatenação/soma), mas não em arrays (usar `.push()`).
4. **Confundir atribuição (`=`) com comparação (`===`)**.
5. **Confundir ordem dos parâmetros** entre o enunciado e os exemplos testados — sempre verificar contra os exemplos dados.
