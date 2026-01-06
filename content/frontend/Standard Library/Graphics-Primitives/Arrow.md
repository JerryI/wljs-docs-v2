---
title: Arrow
---

`Arrow[{pt1, pt2}]` is a graphics primitive representing an arrow from `pt1` to `pt2`. `Arrow[curve]` draws an arrow along a curve.

## Examples

Draw arrows:

```wolfram
Graphics[{
  Arrow[{{0, 0}, {1, 1}}],
  Red, Arrow[{{0, 1}, {1, 0}}]
}]

(* Curved arrow *)
Graphics[Arrow[BezierCurve[{{0, 0}, {1, 1}, {2, 0}}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Arrow.html) for more details.*