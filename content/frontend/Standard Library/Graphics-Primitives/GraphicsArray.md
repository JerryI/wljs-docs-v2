---
title: GraphicsArray
---

`GraphicsArray[{g1, g2, ...}]` represents a row of graphics objects.

`GraphicsArray[{{g11, g12, ...}, ...}]` represents a two-dimensional array of graphical objects.

## Examples

```wolfram
GraphicsArray[{Plot[Sin[x], {x, 0, 2Pi}], Plot[Cos[x], {x, 0, 2Pi}]}]
```

```wolfram
GraphicsArray[{{Plot[x, {x, 0, 1}], Plot[x^2, {x, 0, 1}]}, {Plot[x^3, {x, 0, 1}], Plot[x^4, {x, 0, 1}]}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphicsArray.html) for more details.*