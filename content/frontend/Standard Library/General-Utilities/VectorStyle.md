---
title: VectorStyle
---

`VectorStyle` is an option to `VectorPlot`, `ListVectorPlot`, and related functions that determines the style to use for drawing field vectors.

## Examples

Style vectors with a specific color:

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, VectorStyle -> Red]
```

Use arrowhead styling:

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, VectorStyle -> Arrowheads[0.03]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorStyle.html) for more details.*