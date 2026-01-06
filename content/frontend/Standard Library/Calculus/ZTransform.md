# ZTransform

`ZTransform[expr, n, z]` gives the Z transform of expr.

## Examples

Z transform of a sequence:

```wolfram
ZTransform[a^n, n, z]
(* z/(z - a) *)
```

Unit step:

```wolfram
ZTransform[UnitStep[n], n, z]
(* z/(z - 1) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ZTransform.html) for more details.*