---
title: AsymptoticDSolveValue
---

`AsymptoticDSolveValue[eqn, f, x -> x0]` computes an asymptotic approximation to the differential equation eqn for f[x] centered at x0.

`AsymptoticDSolveValue[{eqn1, eqn2, ...}, {f1, f2, ...}, x -> x0]` computes an asymptotic approximation to a system of differential equations.

`AsymptoticDSolveValue[eqn, f, x, ε -> ε0]` computes an asymptotic approximation of f[x, ε] for the parameter ε centered at ε0.

## Examples

Find asymptotic solution to a differential equation:

```wolfram
AsymptoticDSolveValue[y''[x] + y[x] == 0, y, x -> 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticDSolveValue.html) for more details.*