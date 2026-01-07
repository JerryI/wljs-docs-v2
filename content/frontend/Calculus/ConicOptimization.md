---
title: ConicOptimization
---

`ConicOptimization[f, cons, vars]` finds values of variables vars that minimize the linear objective f subject to conic constraints cons.

`ConicOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

## Examples

Solve a conic optimization problem:

```wolfram
ConicOptimization[x + y, {x^2 + y^2 <= 1}, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConicOptimization.html) for more details.*