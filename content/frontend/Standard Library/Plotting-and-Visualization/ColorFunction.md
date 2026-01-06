---
title: ColorFunction
---

`ColorFunction` is an option for graphics functions that specifies a function to apply to determine colors of elements.

## Examples

Use a color function in a 3D plot:

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, ColorFunction -> "Rainbow"]
```

Custom color function:

```wolfram
DensityPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, ColorFunction -> (Hue[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorFunction.html) for more details.*