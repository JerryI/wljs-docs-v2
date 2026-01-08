---
title: FourierTrigSeries
---

`FourierTrigSeries[expr, t, n]` gives the nth-order Fourier trigonometric series expansion of expr in t.

- `FourierTrigSeries[expr, {t1, t2, ...}, {n1, n2, ...}]` gives the multidimensional Fourier trigonometric series of expr.

## Examples

Compute a Fourier trigonometric series:

```wolfram
FourierTrigSeries[t^2, t, 3]
```

Expand a periodic function:

```wolfram
FourierTrigSeries[SquareWave[t], t, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierTrigSeries.html) for more details.