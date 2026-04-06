---
title: CramerVonMisesTest
---

`CramerVonMisesTest[data]` tests whether data is normally distributed using the Cramér–von Mises test.

`CramerVonMisesTest[data, dist]` tests whether data is distributed according to dist using the Cramér–von Mises test.

`CramerVonMisesTest[data, dist, "property"]` returns the value of "property".

## Examples

Test for normality:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
CramerVonMisesTest[data]
```

Test against a specific distribution:

```wolfram
CramerVonMisesTest[data, UniformDistribution[{0, 1}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CramerVonMisesTest.html) for more details.