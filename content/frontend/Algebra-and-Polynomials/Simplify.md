---
title: Simplify
---

`Simplify[expr]` performs algebraic transformations on expr and returns the simplest form it finds.

`Simplify[expr, assum]` simplifies using assumptions.

## Examples

Simplify expressions:

```wolfram
Simplify[x^2 - 1 - (x - 1)(x + 1)]
(* 0 *)
```

With assumptions:

```wolfram
Simplify[Sqrt[x^2], x > 0]
(* x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Simplify.html) for more details.*