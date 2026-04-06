---
title: SmoothKernelDistribution
---

`SmoothKernelDistribution[{x1, x2, ...}]` represents a smooth kernel distribution based on the data values xi.

`SmoothKernelDistribution[..., bw]` represents a smooth kernel distribution with bandwidth bw.

`SmoothKernelDistribution[..., bw, ker]` represents a smooth kernel distribution with bandwidth bw and smoothing kernel ker.

## Examples

Create a kernel density estimate:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
dist = SmoothKernelDistribution[data];
PDF[dist, 0]
```

Plot the estimated PDF:

```wolfram
Plot[PDF[dist, x], {x, -4, 4}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SmoothKernelDistribution.html) for more details.