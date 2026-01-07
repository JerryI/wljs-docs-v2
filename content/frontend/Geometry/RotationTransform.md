---
title: RotationTransform
---

`RotationTransform[θ]` gives a TransformationFunction that represents a rotation in 2D by θ radians about the origin.

`RotationTransform[θ, p]` gives a 2D rotation about the 2D point p.

`RotationTransform[θ, w]` gives a 3D rotation around the direction of the 3D vector w.

`RotationTransform[θ, w, p]` gives a 3D rotation around the axis w anchored at the point p.

## Examples

2D rotation:

```wolfram
RotationTransform[Pi/4][{1, 0}]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```

3D rotation around z-axis:

```wolfram
RotationTransform[Pi/2, {0, 0, 1}][{1, 0, 0}]
(* {0, 1, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RotationTransform.html) for more details.*