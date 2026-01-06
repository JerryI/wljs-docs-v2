# FourierCosCoefficient

`FourierCosCoefficient[expr,t,n]` gives the nth coefficient in the Fourier cosine series expansion of expr.

`FourierCosCoefficient[expr,{t1,t2,…},{n1,n2,…}]` gives a multidimensional Fourier cosine coefficient.

## Examples

Find the first Fourier cosine coefficient:

```wolfram
FourierCosCoefficient[t^2, t, 1]
(* -4/Pi^2 *)
```

Compute higher-order coefficients:

```wolfram
FourierCosCoefficient[Sin[t]^2, t, 2]
(* -1/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierCosCoefficient.html) for more details.*