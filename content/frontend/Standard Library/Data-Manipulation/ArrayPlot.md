---
title: ArrayPlot
---

`ArrayPlot[array]` generates a plot in which the values in an array are shown in a discrete array of squares.

## Examples

Visualize a 2D array:

```wolfram
ArrayPlot[{{1, 0, 1}, {0, 1, 0}, {1, 0, 1}}]
```

Plot random data:

```wolfram
ArrayPlot[RandomReal[1, {20, 20}], ColorFunction -> "Rainbow"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayPlot.html) for more details.*