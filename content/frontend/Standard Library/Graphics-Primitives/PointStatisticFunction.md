---
title: PointStatisticFunction
---

`PointStatisticFunction[...]` represents a function whose values give the statistic of a points collection pdata at a supplied radius.

## Examples

```wolfram
pdata = RandomPointConfiguration[PoissonPointProcess[1], Rectangle[]];
psf = RipleyK[pdata];
psf[0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointStatisticFunction.html) for more details.*