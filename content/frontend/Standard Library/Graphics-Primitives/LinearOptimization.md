---
title: LinearOptimization
---

`LinearOptimization[f, cons, vars]` finds values of variables vars that minimize the linear objective f subject to linear constraints cons.

`LinearOptimization[c, {a, b}]` finds a real vector x that minimizes the linear objective c.x subject to the linear inequality constraints a.x + b ≥ 0.

## Examples

Minimize with constraints:

```wolfram
LinearOptimization[-x - y, {x + y <= 10, x >= 0, y >= 0}, {x, y}]
(* {x -> 10, y -> 0} *)
```

Vector form:

```wolfram
LinearOptimization[{-1, -1}, {{1, 1}, {-1, 0}, {0, -1}}, {10, 0, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearOptimization.html) for more details.*