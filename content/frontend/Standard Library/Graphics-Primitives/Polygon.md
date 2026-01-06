---
title: Polygon
---

`Polygon[{p1, p2, ..., pn}]` represents a filled polygon with vertices at the specified points.

## Examples

Draw polygons:

```wolfram
(* Triangle *)
Graphics[Polygon[{{0, 0}, {1, 0}, {0.5, 1}}]]

(* Colored pentagon *)
Graphics[{
  LightBlue, EdgeForm[Black],
  Polygon[Table[{Cos[t], Sin[t]}, {t, 0, 2 Pi, 2 Pi/5}]]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Polygon.html) for more details.*