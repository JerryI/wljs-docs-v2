---
title: ParetoPickandsDistribution
---

`ParetoPickandsDistribution[μ,σ,ξ]` gives a Pareto–Pickands distribution with location parameter μ, scale parameter σ and shape parameter ξ.

`ParetoPickandsDistribution[ξ]` gives the standard Pareto–Pickands distribution with zero location and unit scale parameters.

## Examples

Create a standard Pareto-Pickands distribution:

```wolfram
dist = ParetoPickandsDistribution[0.5]
```

Compute the mean of a distribution:

```wolfram
Mean[ParetoPickandsDistribution[0, 1, 0.25]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParetoPickandsDistribution.html) for more details.