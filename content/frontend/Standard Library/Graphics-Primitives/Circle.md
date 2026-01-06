---
title: Circle
---

`Circle[{x, y}, r]` represents a circle of radius `r` centered at `{x, y}`. `Circle[{x, y}]` gives a unit circle.

## Examples

Draw circles:

```wolfram
Graphics[{
  Circle[{0, 0}, 1],
  Red, Circle[{0, 0}, 0.5]
}]

(* Ellipse *)
Graphics[Circle[{0, 0}, {2, 1}]]

(* Arc from 0 to Pi/2 *)
Graphics[Circle[{0, 0}, 1, {0, Pi/2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Circle.html) for more details.*