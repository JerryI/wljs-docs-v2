---
title: DistributionFitTest
---

`DistributionFitTest[data]` tests whether data is normally distributed.

`DistributionFitTest[data, dist]` tests whether data is distributed according to dist.

`DistributionFitTest[data, dist, "property"]` returns the value of "property".

## Examples

Test for normality:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
DistributionFitTest[data]
(* p-value *)
```

Test against specific distribution:

```wolfram
DistributionFitTest[data, ExponentialDistribution[1], "PValue"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistributionFitTest.html) for more details.