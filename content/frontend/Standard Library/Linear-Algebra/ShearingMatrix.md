---
title: ShearingMatrix
---

`ShearingMatrix[θ, v, n]` gives the matrix corresponding to shearing by θ radians along the direction of the vector v, and normal to the vector n.

## Examples

```wolfram
ShearingMatrix[Pi/6, {1, 0}, {0, 1}]
(* {{1, 1/Sqrt[3]}, {0, 1}} *)
```

```wolfram
ShearingMatrix[0.5, {1, 0, 0}, {0, 1, 0}]
(* {{1, 0.546, 0}, {0, 1, 0}, {0, 0, 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShearingMatrix.html) for more details.*