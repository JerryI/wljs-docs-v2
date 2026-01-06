---
title: AnglePath3D
---

`AnglePath3D[{{α1, β1, γ1}, {α2, β2, γ2}, ...}]` gives the list of 3D coordinates of a path of an object that starts at {0,0,0}, then takes a series of steps of unit length, each in the direction obtained after successive rotation by the Euler angles αi, βi, γi.

`AnglePath3D[{{α1, β1}, {α2, β2}, ...}]` assumes the Euler angles γi to be 0.

`AnglePath3D[{mat1, mat2, ...}]` takes the successive rotations to be specified by the 3D rotation matrices mati.

## Examples

Create a 3D angle path:

```wolfram
AnglePath3D[Table[{Pi/6, 0, 0}, 12]]
```

Visualize the path:

```wolfram
Graphics3D[Line[AnglePath3D[Table[{Pi/6, Pi/12, 0}, 20]]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnglePath3D.html) for more details.*