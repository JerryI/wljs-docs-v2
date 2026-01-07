---
title: FindRoot
---

`FindRoot[f, {x, x0}]` searches for a numerical root of f, starting from x = x0.

`FindRoot[lhs == rhs, {x, x0}]` searches for a numerical solution to the equation.

## Examples

Find a root:

```wolfram
FindRoot[Cos[x] == x, {x, 0.5}]
(* {x -> 0.739085} *)
```

Multivariate:

```wolfram
FindRoot[{x + y == 3, x - y == 1}, {{x, 1}, {y, 1}}]
(* {x -> 2., y -> 1.} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindRoot.html) for more details.*