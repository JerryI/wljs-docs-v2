---
title: FourierSinSeries
---

`FourierSinSeries[expr, t, n]` gives the nth-order Fourier sine series expansion of expr in t.

- `FourierSinSeries[expr, {t1, t2, ...}, {n1, n2, ...}]` gives the multidimensional Fourier sine series of expr.

## Examples

Compute a Fourier sine series:

```wolfram
FourierSinSeries[t, t, 5]
```

Expand a function as a sine series:

```wolfram
FourierSinSeries[t (Pi - t), t, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierSinSeries.html) for more details.*