---
title: DSolveChangeVariables
---

`DSolveChangeVariables[dsolve, u, t, trans]` changes the solution function in dsolve to u(t) using the transformation trans.

`DSolveChangeVariables[dsolve, {u1, u2, ...}, t, trans]` changes the solution functions in the system to {u1(t), ..., un(t)}.

`DSolveChangeVariables[dsolve, u, {t1, ..., tn}, trans]` changes the solution function in the partial differential equation to u(t1, ..., tn).

## Examples

Change variables in a DSolve solution:

```wolfram
DSolveChangeVariables[DSolve[y'[x] == y[x], y, x], u, t, {y -> u, x -> t}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DSolveChangeVariables.html) for more details.*