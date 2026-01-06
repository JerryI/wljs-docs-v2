---
title: DensityPlot3D
---

`DensityPlot3D[f, {x, xmin, xmax}, {y, ymin, ymax}, {z, zmin, zmax}]` makes a density plot of f as a function of x, y, and z.

`DensityPlot3D[f, {x, y, z} ∈ reg]` takes the variables to be in the geometric region reg.

## Examples

Create a 3D density plot:

```wolfram
DensityPlot3D[x^2 + y^2 + z^2, {x, -1, 1}, {y, -1, 1}, {z, -1, 1}]
```

With custom opacity:

```wolfram
DensityPlot3D[Sin[x y z], {x, 0, Pi}, {y, 0, Pi}, {z, 0, Pi},
  OpacityFunction -> Function[f, f^2]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DensityPlot3D.html) for more details.*