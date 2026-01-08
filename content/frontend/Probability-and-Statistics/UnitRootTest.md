---
title: UnitRootTest
---

`UnitRootTest[data]` tests whether data came from an autoregressive time series process with unit root.

- `UnitRootTest[data, model, "property"]` returns the value of "property" for a given model.

A unit root indicates a non-stationary time series.

## Examples

```wolfram
data = Accumulate[RandomVariate[NormalDistribution[], 100]];
UnitRootTest[data]
```

```wolfram
UnitRootTest[RandomReal[1, 100]]
```

```wolfram
UnitRootTest[data, Automatic, "PValue"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitRootTest.html) for more details.