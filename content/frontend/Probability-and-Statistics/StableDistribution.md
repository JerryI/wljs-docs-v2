---
title: StableDistribution
---

`StableDistribution[type,α,β,μ,σ]` represents the stable distribution Stype with index of stability α, skewness parameter β, location parameter μ, and scale parameter σ.

## Examples

Create a stable distribution and sample from it:

```wolfram
dist = StableDistribution[1, 1.5, 0, 0, 1];
RandomVariate[dist, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StableDistribution.html) for more details.