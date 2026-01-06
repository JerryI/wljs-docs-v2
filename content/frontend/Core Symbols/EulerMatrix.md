# EulerMatrix

`EulerMatrix[{α, β, γ}]` gives the Euler 3D rotation matrix formed by rotating by α around the current z axis, then by β around the current y axis, and then by γ around the current z axis.

`EulerMatrix[{α, β, γ}, {a, b, c}]` gives the Euler 3D rotation matrix corresponding to rotations around the specified axes a, b, c.

## Examples

Create an Euler rotation matrix:

```wolfram
EulerMatrix[{Pi/4, Pi/3, Pi/6}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EulerMatrix.html) for more details.*