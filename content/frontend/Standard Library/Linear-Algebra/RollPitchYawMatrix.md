---
title: RollPitchYawMatrix
---

`RollPitchYawMatrix[{α,β,γ}]` gives the 3D rotation matrix formed by rotating by α around the initial z axis, then by β around the initial y axis, and then by γ around the initial x axis.

`RollPitchYawMatrix[{α,β,γ},{a,b,c}]` gives the 3D rotation matrix formed by rotating by α around the fixed a axis, then by β around the fixed b axis, and then by γ around the fixed c axis.

## Examples

Create a rotation matrix with specified angles:

```wolfram
RollPitchYawMatrix[{Pi/4, Pi/6, Pi/3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RollPitchYawMatrix.html) for more details.*