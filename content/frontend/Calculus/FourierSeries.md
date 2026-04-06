---
title: FourierSeries
---

`FourierSeries[expr, t, n]` gives the nth-order Fourier series expansion of expr in t.

`FourierSeries[expr, {t1, t2, …}, {n1, n2, …}]` gives the multidimensional Fourier series.

## Examples

Compute a Fourier series:

```wolfram
FourierSeries[t, t, 3]
```

Fourier series of a square wave:

```wolfram
FourierSeries[Sign[Sin[t]], t, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierSeries.html) for more details.