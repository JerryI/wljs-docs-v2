# NIntegrate

`NIntegrate[f, {x, xmin, xmax}]` gives a numerical approximation to the definite integral.

## Examples

Numerical integration:

```wolfram
NIntegrate[Sin[x]^2, {x, 0, Pi}]
(* 1.5708 *)
```

Double integral:

```wolfram
NIntegrate[x y, {x, 0, 1}, {y, 0, 1}]
(* 0.25 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NIntegrate.html) for more details.*