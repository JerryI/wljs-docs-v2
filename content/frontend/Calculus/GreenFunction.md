---
title: GreenFunction
---

`GreenFunction[{ℒ[u[x]], ℬ[u[x]]}, u, {x, xmin, xmax}, y]` gives a Green's function for the linear differential operator ℒ with boundary conditions ℬ in the range xmin to xmax.

`GreenFunction[{ℒ[u[x1, x2, ...]], ℬ[u[x1, x2, ...]]}, u, {x1, x2, ...} ∈ Ω, {y1, y2, ...}]` gives a Green's function for the linear partial differential operator ℒ over the region Ω.

`GreenFunction[{ℒ[u[x, t]], ℬ[u[x, t]]}, u, {x, xmin, xmax}, t, {y, τ}]` gives a Green's function for the linear time-dependent operator ℒ in the range xmin to xmax.

`GreenFunction[{ℒ[u[x1, ..., t]], ℬ[u[x1, ..., t]]}, u, {x1, ...} ∈ Ω, t, {y1, ..., τ}]` gives a Green's function for the linear time-dependent operator ℒ over the region Ω.

## Examples

```wolfram
GreenFunction[{y''[x] - y[x], y[0] == 0, y[1] == 0}, y, {x, 0, 1}, s]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GreenFunction.html) for more details.