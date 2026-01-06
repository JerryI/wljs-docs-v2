# NDSolve

`NDSolve[eqns, u, {x, xmin, xmax}]` finds a numerical solution to the ordinary differential equations eqns for the function u with independent variable x in the specified range.

## Examples

Solve a simple ODE numerically:

```wolfram
sol = NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 5}]
```

Plot the solution:

```wolfram
Plot[Evaluate[y[x] /. sol], {x, 0, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NDSolve.html) for more details.*