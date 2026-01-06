---
title: RevolutionAxis
---

`RevolutionAxis` is an option for `RevolutionPlot3D` which specifies the revolution axis around which the curve should be rotated.

## Examples

Create a surface of revolution around the default z-axis:

```wolfram
RevolutionPlot3D[{2 + Cos[t], t}, {t, 0, 2 Pi}]
```

Rotate around the x-axis:

```wolfram
RevolutionPlot3D[{2 + Cos[t], t}, {t, 0, 2 Pi}, 
  RevolutionAxis -> {1, 0, 0}]
```

Rotate around a tilted axis:

```wolfram
RevolutionPlot3D[Sin[t], {t, 0, Pi}, 
  RevolutionAxis -> {1, 1, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RevolutionAxis.html) for more details.*