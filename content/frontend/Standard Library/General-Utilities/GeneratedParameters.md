# GeneratedParameters

`GeneratedParameters` is an option that specifies how parameters generated to represent the results of various symbolic operations should be named.

## Examples

Use custom naming for generated parameters:

```wolfram
DSolve[y'[x] == y[x], y[x], x, GeneratedParameters -> C]
(* {{y[x] -> E^x C[1]}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeneratedParameters.html) for more details.*