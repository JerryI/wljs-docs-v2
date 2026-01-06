# ListInterpolation

`ListInterpolation[array]` constructs an InterpolatingFunction object from a regular grid of values.

## Examples

Interpolate a 2D array:

```wolfram
data = Table[Sin[x] Cos[y], {x, 0, Pi, Pi/4}, {y, 0, Pi, Pi/4}];
f = ListInterpolation[data, {{0, Pi}, {0, Pi}}]
f[1.0, 0.5]
(* 0.739 *)
```

1D interpolation from values:

```wolfram
f = ListInterpolation[{1, 4, 9, 16}];
f[2.5]
(* 6.5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListInterpolation.html) for more details.*