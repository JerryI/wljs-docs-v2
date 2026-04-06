---
title: FourierCoefficient
---

`FourierCoefficient[expr, t, n]` gives the nth coefficient in the Fourier series expansion of expr.

- `FourierCoefficient[expr, {t1, t2, ...}, {n1, n2, ...}]` gives a multidimensional Fourier coefficient.

## Examples

Compute the 3rd Fourier coefficient:

```wolfram
FourierCoefficient[Cos[3 t], t, 3]
```

Get Fourier coefficients for a square wave:

```wolfram
FourierCoefficient[SquareWave[t], t, 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierCoefficient.html) for more details.