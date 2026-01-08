---
title: Curry
---

`Curry[f, n]` represents an operator form of the function f of n arguments so that `Curry[f, n][x1]…[xn]` is equivalent to `f[x1, …, xn]`.

`Curry[f]` represents an operator form of the function f of two arguments so that `Curry[f][y][x]` is equivalent to `f[x, y]`.

`Curry[f, {i1, …, in}]` represents an operator form of the function f of n arguments so that `Curry[f, {i1, …, in}][x1]…[xn]` is equivalent to `f[xi1, …, xin]`.

## Examples

Create a curried version of a two-argument function:

```wolfram
Curry[f][y][x]
(* f[x, y] *)
```

Curry a function with explicit arity:

```wolfram
Curry[f, 3][a][b][c]
(* f[a, b, c] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Curry.html) for more details.