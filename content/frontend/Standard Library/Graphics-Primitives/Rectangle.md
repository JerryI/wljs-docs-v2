---
title: Rectangle
---

`Rectangle[{xmin, ymin}, {xmax, ymax}]` represents a filled rectangle. `Rectangle[{xmin, ymin}]` gives a unit square.

## Examples

Draw rectangles:

```wolfram
Graphics[{
  LightGray, Rectangle[{0, 0}, {2, 1}],
  Red, Rectangle[{0.5, 0.25}, {1.5, 0.75}]
}]

(* Unit square *)
Graphics[Rectangle[{0, 0}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rectangle.html) for more details.*