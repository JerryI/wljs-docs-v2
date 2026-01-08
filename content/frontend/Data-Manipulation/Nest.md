---
title: Nest
---

`Nest[f, expr, n]` gives an expression with f applied n times to expr.

## Examples

Apply a function 3 times:

```wolfram
Nest[f, x, 3]
(* f[f[f[x]]] *)
```

Practical example:

```wolfram
Nest[Sqrt, 256, 3]
(* 2. *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Nest.html) for more details.