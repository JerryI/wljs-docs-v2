---
title: DStabilityConditions
---

`DStabilityConditions[eqn, x[t], t]` gives the fixed points and stability conditions for a differential equation.

`DStabilityConditions[{eqn1, eqn2, ...}, {x1[t], x2[t], ...}, t]` gives the fixed points and stability conditions for a system of differential equations.

`DStabilityConditions[{eqn1, eqn2, ...}, {x1[t], x2[t], ...}, t, {pnt1, pnt2, ...}]` gives the stability conditions for the given fixed points.

## Examples

Find stability conditions:

```wolfram
DStabilityConditions[x'[t] == x[t] (1 - x[t]), x[t], t]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DStabilityConditions.html) for more details.