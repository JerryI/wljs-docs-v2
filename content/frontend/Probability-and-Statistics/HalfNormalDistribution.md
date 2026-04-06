---
title: HalfNormalDistribution
---

`HalfNormalDistribution[θ]` represents a half-normal distribution with scale inversely proportional to parameter θ.

## Examples

Create a half-normal distribution:

```wolfram
dist = HalfNormalDistribution[1]
```

Plot the probability density:

```wolfram
Plot[PDF[HalfNormalDistribution[1], x], {x, 0, 5}]
```

Generate random samples:

```wolfram
RandomVariate[HalfNormalDistribution[2], 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HalfNormalDistribution.html) for more details.