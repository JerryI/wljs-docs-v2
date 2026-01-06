---
title: Blend
---

`Blend[{col1, col2}, x]` gives a color obtained by blending a fraction 1-x of color col1 and x of color col2.

`Blend[{col1, col2, col3, ...}, x]` linearly interpolates between colors as x varies from 0 to 1.

`Blend[{image1, image2, ...}, ...]` blends pixel values of 2D or 3D images.

## Examples

Blend two colors:

```wolfram
Blend[{Red, Blue}, 0.5]
```

Create a color gradient:

```wolfram
Table[Blend[{Red, Yellow, Green}, x], {x, 0, 1, 0.1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Blend.html) for more details.*