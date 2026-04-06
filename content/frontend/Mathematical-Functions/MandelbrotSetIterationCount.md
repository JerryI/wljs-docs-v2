---
title: MandelbrotSetIterationCount
---

`MandelbrotSetIterationCount[c]` returns the number of iterations of the function f(z) = z² + c, beginning with z₀ = 0, that are needed to determine whether c is in the Mandelbrot set.

## Examples

Count iterations for a point:

```wolfram
MandelbrotSetIterationCount[0.3 + 0.5 I]
```

Point in the set:

```wolfram
MandelbrotSetIterationCount[0]
(* Infinity *)
```

Create Mandelbrot visualization:

```wolfram
DensityPlot[MandelbrotSetIterationCount[x + I y], 
  {x, -2, 1}, {y, -1.5, 1.5}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MandelbrotSetIterationCount.html) for more details.