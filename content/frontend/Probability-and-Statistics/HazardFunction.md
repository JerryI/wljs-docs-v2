---
title: HazardFunction
---

`HazardFunction[dist, x]` gives the hazard function for the distribution dist evaluated at x.

- `HazardFunction[dist, {x1, x2, ...}]` gives the multivariate hazard function for the distribution dist evaluated at {x1, x2, ...}.
- `HazardFunction[dist]` gives the hazard function as a pure function.

## Examples

Compute the hazard function:
```wolfram
HazardFunction[ExponentialDistribution[1], x]
```

Plot the hazard function:
```wolfram
Plot[HazardFunction[WeibullDistribution[2, 1], t], {t, 0, 5}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HazardFunction.html) for more details.