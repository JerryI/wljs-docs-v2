---
title: Eliminate
---

`Eliminate[eqns, vars]` eliminates variables between a set of simultaneous equations.

## Examples

Eliminate y from two equations:

```wolfram
Eliminate[{x + y == 3, x - y == 1}, y]
(* x == 2 *)
```

Eliminate multiple variables:

```wolfram
Eliminate[{a == b + c, b == 2c, c == 3}, {b, c}]
(* a == 9 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Eliminate.html) for more details.