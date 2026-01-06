---
title: BaringhausHenzeTest
---

`BaringhausHenzeTest[data]` tests whether data follows a MultinormalDistribution using the Baringhaus–Henze test.

`BaringhausHenzeTest[data, MultinormalDistribution[μ, Σ]]` tests whether data follows the distribution with mean vector μ and covariance matrix Σ.

`BaringhausHenzeTest[data, "property"]` returns the value of "property".

## Examples

Test multivariate data for normality:

```wolfram
data = RandomVariate[MultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}], 100];
BaringhausHenzeTest[data]
```

Get the p-value:

```wolfram
BaringhausHenzeTest[data, "PValue"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BaringhausHenzeTest.html) for more details.*