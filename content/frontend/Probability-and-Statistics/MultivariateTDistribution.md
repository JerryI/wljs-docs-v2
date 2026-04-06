---
title: MultivariateTDistribution
---

`MultivariateTDistribution[Σ, ν]` represents the multivariate Student t distribution with scale matrix Σ and degrees of freedom parameter ν.

- `MultivariateTDistribution[μ, Σ, ν]` represents the multivariate Student t distribution with location μ, scale matrix Σ, and ν degrees of freedom.

## Examples

```wolfram
dist = MultivariateTDistribution[{{1, 0.5}, {0.5, 1}}, 5];
PDF[dist, {x, y}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultivariateTDistribution.html) for more details.