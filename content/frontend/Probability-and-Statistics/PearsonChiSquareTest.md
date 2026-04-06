---
title: PearsonChiSquareTest
---

`PearsonChiSquareTest[data]` tests whether data is normally distributed using the Pearson χ² test.

- `PearsonChiSquareTest[data, dist]` tests whether data is distributed according to dist using the Pearson χ² test.
- `PearsonChiSquareTest[data, dist, "property"]` returns the value of "property".

## Examples

```wolfram
data = RandomVariate[NormalDistribution[], 100];
PearsonChiSquareTest[data]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PearsonChiSquareTest.html) for more details.