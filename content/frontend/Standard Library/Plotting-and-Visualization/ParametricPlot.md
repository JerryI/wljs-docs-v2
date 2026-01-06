---
title: ParametricPlot
---

`ParametricPlot[{fx, fy}, {u, umin, umax}]` generates a parametric plot of a curve with x and y coordinates as functions of u.

## Examples

Plot a circle:

```wolfram
ParametricPlot[{Cos[t], Sin[t]}, {t, 0, 2 Pi}]
```

Plot a spiral:

```wolfram
ParametricPlot[{t Cos[t], t Sin[t]}, {t, 0, 4 Pi}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricPlot.html) for more details.*