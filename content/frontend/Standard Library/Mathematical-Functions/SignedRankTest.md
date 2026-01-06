---
title: SignedRankTest
---

`SignedRankTest[data]` tests whether the median of data is zero.

- `SignedRankTest[{data1, data2}]` tests whether the median of data1-data2 is zero.
- `SignedRankTest[dspec, μ0]` tests a location measure against μ0.
- `SignedRankTest[dspec, μ0, "property"]` returns the value of "property".

The Wilcoxon signed-rank test is a non-parametric test for comparing paired samples.

## Examples

```wolfram
SignedRankTest[{1.2, -0.3, 2.1, 0.5, -0.8, 1.5}]
```

```wolfram
SignedRankTest[RandomVariate[NormalDistribution[1, 1], 30], 0]
```

```wolfram
SignedRankTest[{before, after}, 0, "PValue"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SignedRankTest.html) for more details.*