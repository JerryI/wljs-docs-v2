---
title: PointProcessFitTest
---

`PointProcessFitTest[pdata]` tests whether the point collection pdata could be modeled by a Poisson point process.

- `PointProcessFitTest[pdata, pproc]` tests whether the point collection could be modeled by the point process pproc.
- `PointProcessFitTest[pdata, pproc, "property"]` returns the value of "property".

## Examples

Test random points against a Poisson process:
```wolfram
points = RandomPoint[Rectangle[], 50];
PointProcessFitTest[points]
```

Get the p-value from the test:
```wolfram
PointProcessFitTest[points, PoissonPointProcess[1, 2], "PValue"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointProcessFitTest.html) for more details.*