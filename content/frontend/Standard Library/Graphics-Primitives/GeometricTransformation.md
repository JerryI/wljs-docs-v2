# GeometricTransformation

`GeometricTransformation[g, tfun]` represents the result of applying the transformation function tfun to the geometric objects corresponding to the primitives g.

`GeometricTransformation[g, m]` transforms geometric objects in g by effectively replacing every point r by m.r.

`GeometricTransformation[g, {m, v}]` effectively replaces every point r by m.r+v.

`GeometricTransformation[g, {t1, t2, ...}]` represents multiple copies of g transformed by a collection of transformations.

## Examples

```wolfram
Graphics[GeometricTransformation[Rectangle[], RotationTransform[Pi/4]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricTransformation.html) for more details.*