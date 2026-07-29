# Notas da sessão — Timer, To-Do List

## 1. `return` sai da função imediatamente
Código escrito **depois** de um `return` (dentro do mesmo bloco `if/else`) nunca corre — é código morto. Se queres continuar a execução, não uses `return`; deixa o `if` vazio ou usa uma guard clause invertida no início.

```javascript
// Errado: o segundo if nunca corre
function f(num) {
    if (valido) { return num }
    else { return 'erro' }
    // código morto aqui
}

// Certo: guard clause
function f(num) {
    if (!valido) return 'erro'
    // continua normalmente
}
```

## 2. `continue` só existe dentro de loops
Não pode ser usado dentro de um `if` normal fora de um `for`/`while`. Para "não fazer nada e seguir em frente", basta deixar o bloco `if` vazio ou usar guard clause.

## 3. `setInterval` devolve um ID — guarda-o para poderes parar
```javascript
let clock; // fora da função, escopo global

function startClock() {
    clearInterval(clock); // limpa qualquer intervalo anterior antes de criar um novo
    clock = setInterval(() => { ... }, 1000);
}

function pauseClock() {
    clearInterval(clock); // usa o mesmo ID para parar
}
```
**Bug clássico:** se não guardares o ID fora da função, cada clique em "start" cria um novo `setInterval` sem conseguires cancelar os anteriores → o timer acelera.

## 4. Não faças *shadowing* de variáveis importantes
Se já tens `const timer = document.querySelector('.timer')` global, não cries outra variável chamada `timer` dentro de uma função — ela "esconde" a global dentro desse escopo e passa a apontar para outra coisa (ex: um número em vez de um elemento do DOM).

## 5. Recalcular vs. incrementar
Para mostrar tempo formatado (horas:minutos:segundos), mantém **uma única fonte de verdade** (`totalSeconds`, um número que só sobe) e recalcula o formato a cada tick, em vez de tentar incrementar minutos/horas manualmente:

```javascript
function getTimeFromSeconds(segundos) {
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-PT', {
        hour12: false,
        timeZone: 'GMT' // importante: evita que o fuso horário local desloque as horas
    });
}
```
`toLocaleTimeString` já trata dos zeros à esquerda (`00:00:05`) — não precisas de `padStart` à mão.

## 6. `JSON.parse(null)` devolve `null`, não erro — mas o loop a seguir rebenta
```javascript
const tasks = localStorage.getItem('tasks'); // null se nunca guardaste nada
const listOfTasks = JSON.parse(tasks);       // null
for (let task of listOfTasks) { ... }        // TypeError: null is not iterable
```
**Sempre valida antes de iterar sobre dados vindos de fora (localStorage, API, input do utilizador):**
```javascript
if (!tasks) return; // sai cedo se não houver nada guardado
```
Este bug só aparece em `localStorage` vazio (primeira visita, ou depois de `localStorage.clear()`) — fácil de não notar em testes normais.

## 7. Reaproveitar funções em vez de duplicar lógica
`addSavedTasks` não recria a lógica de "criar uma tarefa" — chama a mesma `createTask` que já é usada no clique/Enter, só que num loop, uma vez por cada item guardado. Um único sítio a criar `<li>`s, chamado a partir de vários gatilhos (clique, Enter, carregar a página).

## 8. Testar o intervalo todo, não só um valor
Ao construir uma função (ex: FizzBuzz), testar só `numCheck(10)` não prova que `Fizz`, `Buzz`, `FizzBuzz` e o caso de erro funcionam. Um `for` a percorrer todo o intervalo relevante (0 a 100) força todos os ramos da função a executar, e os bugs aparecem mais depressa.