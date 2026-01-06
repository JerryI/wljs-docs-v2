# TransformedField

`TransformedField[t, f, {x1, x2, ..., xn} -> {y1, y2, ..., yn}]` uses the coordinate transformation t to transform the scalar, vector, or tensor field f from coordinates xi to yi.

## Examples

```wolfram
TransformedField["Cartesian" -> "Polar", {x, y}, {x, y} -> {r, θ}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformedField.html) for more details.*