---
title: RobustConvexOptimization
---

`RobustConvexOptimization[f, ForAll[pars, pcons, vcons], vars]` finds values of vars that give the minimum value of f for vars that satisfy the constraints vcons for all possible values of the parameters pars that satisfy the parametric constraints pcons.

- `RobustConvexOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

This function solves optimization problems with uncertainty in parameters.

## Examples

```wolfram
RobustConvexOptimization[x + y, 
  ForAll[{a}, -1 <= a <= 1, x + a*y >= 1], {x, y}]
```

```wolfram
RobustConvexOptimization[x, 
  ForAll[{p}, Abs[p] <= 1, x + p >= 0], {x}]
```

```wolfram
RobustConvexOptimization[x^2 + y^2, 
  ForAll[{a, b}, a^2 + b^2 <= 1, a*x + b*y <= 1], {x, y}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RobustConvexOptimization.html) for more details.