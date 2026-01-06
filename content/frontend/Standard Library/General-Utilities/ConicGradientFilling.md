---
title: ConicGradientFilling
---

`ConicGradientFilling[{col1, col2, ..., coln}]` is a two-dimensional graphics directive specifying that faces of polygons and other filled graphics objects are to be drawn using a progressive transition between colors coli along a circle.

`ConicGradientFilling[{θ1, θ2, ..., θn} -> {col1, col2, ..., coln}]` uses the colors coli at angles θi.

## Examples

Create a conic gradient:

```wolfram
Graphics[{ConicGradientFilling[{Red, Yellow, Green, Cyan, Blue, Magenta, Red}], Disk[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConicGradientFilling.html) for more details.*