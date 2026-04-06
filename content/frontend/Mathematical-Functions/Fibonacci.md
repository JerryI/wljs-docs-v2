---
title: Fibonacci
---

`Fibonacci[n]` gives the nth Fibonacci number.

`Fibonacci[n, x]` gives the Fibonacci polynomial Fₙ(x).

## Examples

Get Fibonacci numbers:

```wolfram
Fibonacci[10]
(* 55 *)
```

Generate a sequence:

```wolfram
Table[Fibonacci[n], {n, 1, 10}]
(* {1, 1, 2, 3, 5, 8, 13, 21, 34, 55} *)
```

A large Fibonacci number:

```wolfram
Fibonacci[100]
(* 354224848179261915075 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Fibonacci.html) for more details.