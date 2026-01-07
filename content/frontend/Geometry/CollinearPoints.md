---
title: CollinearPoints
---

`CollinearPoints[{p1, p2, p3, ..., pn}]` tests whether the points p1, p2, p3, ..., pn are collinear.

## Examples

Test if points are collinear:

```wolfram
CollinearPoints[{{0, 0}, {1, 1}, {2, 2}}]
(* True *)
```

Non-collinear points:

```wolfram
CollinearPoints[{{0, 0}, {1, 1}, {2, 3}}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CollinearPoints.html) for more details.*