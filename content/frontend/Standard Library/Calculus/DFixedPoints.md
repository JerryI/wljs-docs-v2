---
title: DFixedPoints
---

`DFixedPoints[eqn, x[t], t]` gives the fixed points for a differential equation.

`DFixedPoints[{eqn1, eqn2, ...}, {x1[t], x2[t], ...}, t]` gives the fixed points for a system of differential equations.

## Examples

Find fixed points of a differential equation:

```wolfram
DFixedPoints[x'[t] == x[t] (1 - x[t]), x[t], t]
(* {0, 1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DFixedPoints.html) for more details.*