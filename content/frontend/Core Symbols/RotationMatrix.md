# RotationMatrix

`RotationMatrix[θ]` gives the 2D rotation matrix that rotates 2D vectors counterclockwise by θ radians.

`RotationMatrix[θ, w]` gives the 3D rotation matrix for a counterclockwise rotation around the 3D vector w.

`RotationMatrix[{u, v}]` gives the matrix that rotates the vector u to the direction of the vector v.

## Examples

2D rotation matrix:

```wolfram
RotationMatrix[Pi/4]
(* {{1/Sqrt[2], -1/Sqrt[2]}, {1/Sqrt[2], 1/Sqrt[2]}} *)
```

3D rotation around z-axis:

```wolfram
RotationMatrix[Pi/2, {0, 0, 1}]
(* {{0, -1, 0}, {1, 0, 0}, {0, 0, 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RotationMatrix.html) for more details.*