---
title: PointDensity
---

`PointDensity[pdata]` estimates the point density function μ(x) from point data pdata.

`PointDensity[pdata,pmethod]` estimates the point density function μ(x) with the partition method pmethod.

`PointDensity[bdata,…]` estimates the point density function μ(x) from binned data bdata.

`PointDensity[pproc,…]` computes the density function μ(x) for point process pproc.

## Examples

Estimate point density from random data:

```wolfram
data = RandomReal[1, {100, 2}];
PointDensity[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointDensity.html) for more details.*