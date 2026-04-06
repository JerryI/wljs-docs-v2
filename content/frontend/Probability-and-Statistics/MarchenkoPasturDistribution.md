---
title: MarchenkoPasturDistribution
---

`MarchenkoPasturDistribution[λ, σ]` represents a Marchenko–Pastur distribution with asymptotic ratio λ and scale parameter σ.

- `MarchenkoPasturDistribution[λ]` represents a Marchenko–Pastur distribution with unit scale parameter.

## Examples

Create a Marchenko-Pastur distribution:
```wolfram
dist = MarchenkoPasturDistribution[0.5, 1];
PDF[dist, x]
```

Sample from the distribution:
```wolfram
RandomVariate[MarchenkoPasturDistribution[0.3], 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MarchenkoPasturDistribution.html) for more details.