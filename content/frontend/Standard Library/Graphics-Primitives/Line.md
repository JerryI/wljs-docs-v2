---
title: Line
---

`Line[{p1, p2, ...}]` represents line segments joining a sequence of points.

## Examples

Draw lines in a graphic:

```wolfram
Graphics[{
  Thick, Blue,
  Line[{{0, 0}, {1, 1}, {2, 0}}]
}]

(* Multiple disconnected lines *)
Graphics[Line[{{{0, 0}, {1, 1}}, {{2, 0}, {3, 1}}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Line.html) for more details.*