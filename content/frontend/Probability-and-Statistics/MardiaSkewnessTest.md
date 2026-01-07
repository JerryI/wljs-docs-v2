---
title: MardiaSkewnessTest
---

`MardiaSkewnessTest[data]` tests whether data follows a `MultinormalDistribution` using the Mardia skewness test.

- `MardiaSkewnessTest[data, "property"]` returns the value of "property".

## Examples

```wolfram
data = RandomVariate[MultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}], 100];
MardiaSkewnessTest[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MardiaSkewnessTest.html) for more details.*