---
title: EstimatedDistribution
---

`EstimatedDistribution[data, dist]` estimates the parametric distribution dist from data.

## Examples

Estimate normal parameters:

```wolfram
data = RandomVariate[NormalDistribution[5, 2], 1000];
EstimatedDistribution[data, NormalDistribution[μ, σ]]
(* NormalDistribution[5.02, 1.98] *)
```

Estimate exponential:

```wolfram
data = RandomVariate[ExponentialDistribution[0.5], 500];
EstimatedDistribution[data, ExponentialDistribution[λ]]
(* ExponentialDistribution[0.51] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatedDistribution.html) for more details.