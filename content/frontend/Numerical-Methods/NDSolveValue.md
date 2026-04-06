---
title: NDSolveValue
---

`NDSolveValue[eqns, expr, {x, xmin, xmax}]` gives the value of expr determined by numerical solution to differential equations.

## Examples

Solve ODE and get function:

```wolfram
sol = NDSolveValue[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 2}]
sol[1.0]
(* 2.718 *)
```

Plot the solution:

```wolfram
Plot[sol[x], {x, 0, 2}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NDSolveValue.html) for more details.