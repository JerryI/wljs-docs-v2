---
title: ParameterMixtureDistribution
---

`ParameterMixtureDistribution[dist[θ], θ \[Distributed] wdist]` represents a parameter mixture distribution where the parameter θ is distributed according to the weight distribution wdist.

- `ParameterMixtureDistribution[dist[θ1, θ2, ...], {θ1 \[Distributed] wdist1, θ2 \[Distributed] wdist2, ...}]` represents a parameter mixture distribution where each parameter has its own weight distribution.

## Examples

```wolfram
dist = ParameterMixtureDistribution[
  NormalDistribution[μ, 1], μ \[Distributed] NormalDistribution[0, 1]
]
```

```wolfram
Mean[dist]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParameterMixtureDistribution.html) for more details.