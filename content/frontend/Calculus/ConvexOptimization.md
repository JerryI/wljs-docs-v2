---
title: ConvexOptimization
---

`ConvexOptimization[f, cons, vars]` finds values of variables vars that minimize the convex objective function f subject to convex constraints cons.

`ConvexOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

## Examples

Solve a convex optimization problem:

```wolfram
ConvexOptimization[x^2 + y^2, {x + y >= 1}, {x, y}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConvexOptimization.html) for more details.