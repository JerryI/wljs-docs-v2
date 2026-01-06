---
title: TextureCoordinateScaling
---

`TextureCoordinateScaling` is an option to `Plot3D` and similar functions that specifies whether arguments supplied to a texture coordinate function should be scaled to lie between 0 and 1.

## Examples

Enable coordinate scaling:
```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, TextureCoordinateScaling -> True]
```

Disable scaling:
```wolfram
ParametricPlot3D[surface, TextureCoordinateScaling -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextureCoordinateScaling.html) for more details.*