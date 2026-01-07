---
title: Minimize
---

`Minimize[f, x]` minimizes f symbolically with respect to x.

## Examples

Symbolic minimum:

```wolfram
Minimize[x^2 - 4x + 5, x]
(* {1, {x -> 2}} *)
```

With constraints:

```wolfram
Minimize[{x + y, x >= 0, y >= 0, x + y >= 1}, {x, y}]
(* {1, {x -> 0, y -> 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Minimize.html) for more details.*