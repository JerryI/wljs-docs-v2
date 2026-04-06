---
title: FrechetDistribution
---

`FrechetDistribution[α, β]` represents the Fréchet distribution with shape parameter α and scale parameter β.

`FrechetDistribution[α, β, μ]` includes a location parameter μ.

## Examples

Generate random samples:

```wolfram
RandomVariate[FrechetDistribution[2, 1], 5]
```

Compute mean:

```wolfram
Mean[FrechetDistribution[3, 1]]
(* Gamma[1 - 1/3] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrechetDistribution.html) for more details.