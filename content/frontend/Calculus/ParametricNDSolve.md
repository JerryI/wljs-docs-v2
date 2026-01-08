---
title: ParametricNDSolve
---

`ParametricNDSolve[eqns, u, {x, xmin, xmax}, pars]` finds a numerical solution to the ordinary differential equations eqns for the function u with the independent variable x in the range xmin to xmax with parameters pars.

- `ParametricNDSolve[eqns, u, {x, xmin, xmax}, {y, ymin, ymax}, pars]` solves the partial differential equations eqns over a rectangular region.
- `ParametricNDSolve[eqns, u, {x, y} ∈ Ω, pars]` solves the partial differential equations eqns over the region Ω.
- `ParametricNDSolve[eqns, {u1, u2, ...}, ...]` solves for the functions ui.

## Examples

Solve an ODE with a parameter:

```wolfram
sol = ParametricNDSolve[{y'[x] == a y[x], y[0] == 1}, y, {x, 0, 1}, {a}];
Plot[Evaluate[Table[y[a][x] /. sol, {a, {-1, 0, 1, 2}}]], {x, 0, 1}]
```

Access the parametric solution:

```wolfram
y[2][0.5] /. sol
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricNDSolve.html) for more details.