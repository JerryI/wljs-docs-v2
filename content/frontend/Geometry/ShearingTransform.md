---
title: ShearingTransform
---

`ShearingTransform[θ, v, n]` gives a TransformationFunction that represents a shear by θ radians along the direction of the vector v, normal to the vector n, keeping the origin fixed.

`ShearingTransform[θ, v, n, p]` gives a shear that keeps the point p fixed, rather than the origin.

## Examples

Apply a 2D shear:

```wolfram
ShearingTransform[0.5, {1, 0}, {0, 1}][{1, 1}]
(* {1.54931, 1} *)
```

Shear a rectangle:

```wolfram
Graphics[{
  EdgeForm[Black], 
  GeometricTransformation[Rectangle[], ShearingTransform[0.3, {1, 0}, {0, 1}]]
}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShearingTransform.html) for more details.