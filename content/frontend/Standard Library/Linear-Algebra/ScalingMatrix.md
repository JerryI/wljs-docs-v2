---
title: ScalingMatrix
---

`ScalingMatrix[{sx, sy, ...}]` gives the matrix corresponding to scaling by a factor si along each coordinate axis.

`ScalingMatrix[s, v]` gives the matrix corresponding to scaling by a factor s along the direction of the vector v.

## Examples

2D scaling matrix:

```wolfram
ScalingMatrix[{2, 3}]
(* {{2, 0}, {0, 3}} *)
```

Uniform scaling:

```wolfram
ScalingMatrix[{2, 2, 2}]
(* {{2, 0, 0}, {0, 2, 0}, {0, 0, 2}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScalingMatrix.html) for more details.*