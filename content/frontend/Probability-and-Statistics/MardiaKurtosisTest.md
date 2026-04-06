---
title: MardiaKurtosisTest
---

`MardiaKurtosisTest[data]` tests whether data follows a MultinormalDistribution using the Mardia kurtosis test.

- `MardiaKurtosisTest[data, "property"]` returns the value of "property".

## Examples

Test multivariate normality:

```wolfram
data = RandomVariate[MultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}], 100];
MardiaKurtosisTest[data]
```

Get p-value:

```wolfram
MardiaKurtosisTest[data, "PValue"]
```

Test statistic:

```wolfram
MardiaKurtosisTest[data, "TestStatistic"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MardiaKurtosisTest.html) for more details.