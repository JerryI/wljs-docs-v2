# FourierSinTransform

`FourierSinTransform[expr, t, ω]` gives the symbolic Fourier sine transform of expr.

- `FourierSinTransform[expr, {t1, t2, ...}, {ω1, ω2, ...}]` gives the multidimensional Fourier sine transform of expr.

## Examples

Compute the Fourier sine transform:

```wolfram
FourierSinTransform[Exp[-t^2], t, ω]
```

Transform an exponential function:

```wolfram
FourierSinTransform[Exp[-a t], t, ω, Assumptions -> a > 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierSinTransform.html) for more details.*