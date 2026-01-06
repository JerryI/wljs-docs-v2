# CoordinateTransform

`CoordinateTransform[t, pt]` performs the coordinate transformation t on the point pt.

`CoordinateTransform[t, {pt1, pt2, ...}]` transforms several points.

## Examples

Convert Cartesian to polar:

```wolfram
CoordinateTransform["Cartesian" -> "Polar", {1, 1}]
(* {Sqrt[2], Pi/4} *)
```

Convert spherical to Cartesian:

```wolfram
CoordinateTransform["Spherical" -> "Cartesian", {1, Pi/4, Pi/4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoordinateTransform.html) for more details.*