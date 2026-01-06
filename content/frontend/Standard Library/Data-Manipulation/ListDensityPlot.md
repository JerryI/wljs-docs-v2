---
title: ListDensityPlot
---

`ListDensityPlot[data]` generates a smooth density plot from an array of values.

## Examples

Density plot from array:

```wolfram
data = Table[Sin[x] Sin[y], {x, 0, Pi, 0.1}, {y, 0, Pi, 0.1}];
ListDensityPlot[data]
```

With color function:

```wolfram
ListDensityPlot[data, ColorFunction -> "Rainbow"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListDensityPlot.html) for more details.*