---
title: FourierSinCoefficient
---

`FourierSinCoefficient[expr, t, n]` gives the nth coefficient in the Fourier sine series expansion of expr.

- `FourierSinCoefficient[expr, {t1, t2, ...}, {n1, n2, ...}]` gives a multidimensional Fourier sine coefficient.

## Examples

Compute the Fourier sine coefficient:

```wolfram
FourierSinCoefficient[Sin[3 t], t, 3]
```

Get coefficients for a sawtooth wave:

```wolfram
FourierSinCoefficient[t, t, n]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierSinCoefficient.html) for more details.*