---
title: ParametricConvexOptimization
---

`ParametricConvexOptimization[f, cons, vars, pars]` gives a ParametricFunction object that finds values of variables vars that minimize the convex objective function f subject to convex constraints cons with parameters pars.

- `ParametricConvexOptimization[..., "prop"]` specifies what solution property "prop" should be returned by the ParametricFunction object.

## Examples

Create a parametric optimizer:
```wolfram
pf = ParametricConvexOptimization[x^2 + p x, {x >= 0}, {x}, {p}];
pf[2]
```

Get minimum value:
```wolfram
ParametricConvexOptimization[obj, cons, vars, pars, "PrimalMinimumValue"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricConvexOptimization.html) for more details.