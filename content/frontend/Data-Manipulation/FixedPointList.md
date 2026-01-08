---
title: FixedPointList
---

`FixedPointList[f, expr]` generates a list of results from applying f repeatedly until the result no longer changes.

`FixedPointList[f, expr, n]` stops after at most n steps.

## Examples

Find fixed point iterations:

```wolfram
FixedPointList[Cos, 1.0, 10]
(* {1., 0.540302, 0.857553, 0.65429, 0.79348, ...} *)
```

Newton's method for sqrt(2):

```wolfram
FixedPointList[(# + 2/#)/2 &, 1.0]
(* {1., 1.5, 1.41667, 1.41422, 1.41421, 1.41421, 1.41421} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FixedPointList.html) for more details.