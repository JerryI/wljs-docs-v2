---
title: AffineHalfSpace
---

`AffineHalfSpace[{p1, ..., pk+1}, w]` represents `AffineSpace[{p1, ..., pk+1}]` extended in the direction w.

`AffineHalfSpace[p, {v1, ..., vk}, w]` represents `AffineSpace[p, {v1, ..., vk}]` extended in the direction w.

## Examples

Create a half-space in 2D:

```wolfram
AffineHalfSpace[{{0, 0}, {1, 0}}, {0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AffineHalfSpace.html) for more details.*