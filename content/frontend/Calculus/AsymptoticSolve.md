---
title: AsymptoticSolve
---

`AsymptoticSolve[eqn, y -> b, x -> a]` computes asymptotic approximations of solutions y[x] of the equation eqn passing through {a, b}.

`AsymptoticSolve[eqn, {y}, x -> a]` computes asymptotic approximations of solutions y[x] of the equation eqn for x near a.

`AsymptoticSolve[eqns, {y1, y2, ...} -> {b1, b2, ...}, {x1, x2, ...} -> {a1, a2, ...}]` computes asymptotic approximations for a system of equations.

## Examples

Find asymptotic solutions:

```wolfram
AsymptoticSolve[y^2 + x y + x^2 == 0, y -> 0, x -> 0]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticSolve.html) for more details.