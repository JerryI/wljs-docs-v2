---
title: DSolveValue
---

`DSolveValue[eqn, expr, x]` gives the value of expr determined by a symbolic solution to the differential equation.

## Examples

Solve ODE and get function:

```wolfram
DSolveValue[{y'[x] == y[x], y[0] == 1}, y[x], x]
(* E^x *)
```

Second order ODE:

```wolfram
DSolveValue[y''[x] + y[x] == 0, y[x], x]
(* C[1] Cos[x] + C[2] Sin[x] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DSolveValue.html) for more details.