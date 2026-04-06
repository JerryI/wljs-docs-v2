---
title: GompertzMakehamDistribution
---

`GompertzMakehamDistribution[λ, ξ]` represents a Gompertz distribution with scale parameter `λ` and frailty parameter `ξ`.

- `GompertzMakehamDistribution[λ, ξ, θ, α]` represents a Gompertz–Makeham distribution with parameters `λ`, `ξ`, `θ`, and `α`.

## Examples

```wolfram
dist = GompertzMakehamDistribution[1, 2];
PDF[dist, x]
```

```wolfram
Mean[GompertzMakehamDistribution[0.1, 1]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GompertzMakehamDistribution.html) for more details.