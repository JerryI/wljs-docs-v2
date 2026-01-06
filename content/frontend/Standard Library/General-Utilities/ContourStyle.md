---
title: ContourStyle
---

`ContourStyle` is an option for contour plots that specifies the style in which contour lines or surfaces should be drawn.

## Examples

Red dashed contours:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, 
  ContourStyle -> {Red, Dashed}]
```

Thick black contours:

```wolfram
ContourPlot[Sin[x y], {x, 0, 3}, {y, 0, 3}, 
  ContourStyle -> Directive[Black, Thick]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourStyle.html) for more details.*