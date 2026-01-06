---
title: Contours
---

`Contours` is an option for contour plots that specifies the contours to draw.

## Examples

Specify number of contours:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, Contours -> 10]
```

Specify explicit contour values:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, Contours -> {1, 2, 3, 4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Contours.html) for more details.*