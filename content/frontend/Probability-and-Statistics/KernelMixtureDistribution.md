---
title: KernelMixtureDistribution
---

`KernelMixtureDistribution[{x1, x2, …}]` represents a kernel mixture distribution based on the data values `xi`.

- `KernelMixtureDistribution[{{x1, y1, …}, {x2, y2, …}, …}]` represents a multivariate kernel mixture distribution based on data values `{xi, yi, …}`.
- `KernelMixtureDistribution[…, bw]` represents a kernel mixture distribution with bandwidth `bw`.
- `KernelMixtureDistribution[…, bw, ker]` represents a kernel mixture distribution with bandwidth `bw` and smoothing kernel `ker`.

## Examples

```wolfram
KernelMixtureDistribution[RandomReal[1, 100]]
```

```wolfram
PDF[KernelMixtureDistribution[{1, 2, 2, 3}], x]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KernelMixtureDistribution.html) for more details.