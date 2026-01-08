---
title: ParametricNDSolveValue
---

`ParametricNDSolveValue[eqns,expr,{x,xmin,xmax},pars]` gives the value of expr with functions determined by a numerical solution to the ordinary differential equations eqns with the independent variable x in the range xmin to xmax with parameters pars.

`ParametricNDSolveValue[eqns,expr,{x,xmin,xmax},{y,ymin,ymax},pars]` solves the partial differential equations eqns over a rectangular region.

`ParametricNDSolveValue[eqns,expr,{x,y}∈Ω,pars]` solves the partial differential equations eqns over the region Ω.

`ParametricNDSolveValue[eqns,expr,{t,tmin,tmax},{x,y}∈Ω,pars]` solves the time-dependent partial differential equations eqns over the region Ω.

## Examples

Solve an ODE with a parameter:

```wolfram
f = ParametricNDSolveValue[{y'[x] == a y[x], y[0] == 1}, y, {x, 0, 10}, {a}];
Plot[f[-0.5][x], {x, 0, 10}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricNDSolveValue.html) for more details.